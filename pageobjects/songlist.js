class SongList {
     songMenuTitle(number) {
        return $('.eight').$$('.item')[number].$('div[class="content"]')
    }

     selectedSongTitle() {
        return $$('.column.eight.wide')[1].$('p')
    }

    selectSongButton(number){
        return $$('.column.eight.wide')[0].$('.ui.divided.list').$$('.item')[number].$('.ui.button.primary')
    }
}

export default new SongList()