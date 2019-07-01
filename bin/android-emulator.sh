#!/bin/sh

#
# Starts the Android virtual device with a writeable filesystem.
# If the -hosts option is provided, replaces /etc/hosts on the device with the
# given hosts file.
# If no -avd option is given, starts the first AVD in the list.
#

set -e

if [ -z "$ANDROID_HOME" ]; then
  echo 'Error: ANDROID_HOME is not defined.' >&2
  exit 1
fi

# shellcheck disable=SC2139
alias emulator="$ANDROID_HOME/emulator/emulator"
# shellcheck disable=SC2139
alias adb="$ANDROID_HOME/platform-tools/adb"

# Echos first AVD listed
avd() {
  emulator -list-avds | head -n 1
}

is_boot_completed() {
  test "$(adb shell getprop sys.boot_completed | tr -d '\r')" = 1
}

has_avd_arg() {
  while test $# -gt 0; do
    test "$1" = -avd && return 0
    shift
  done
  return 1
}


shutdown() {
  kill "$PID"
}

# Initiate a shutdown on SIGINT and SIGTERM:
trap 'shutdown; exit' INT TERM


if ! has_avd_arg "$@"; then
  set -- -avd "$(avd)" -wipe-data "$@"
fi

set -- -writable-system "$@"

emulator "$@" & PID=$!

wait "$PID"
