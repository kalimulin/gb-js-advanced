const musicCollection = {
    musicAlbums: [
        { title: 'The Unseen', artist: 'Quasimoto',  year: '2000'},
        { title: 'Bavarian Fruit Bread', artist: 'Hope Sandoval & The Warm Inventions',  year: '2001'},
        { title: 'Bocas Ordinárias', artist: 'Charlie Brown Jr.',  year: '2002'},
        { title: 'Quebec', artist: 'Ween',  year: '2003'}
    ],
    [Symbol.iterator]() {
        this.index = 0
        return this
    },
    next() {
        return this.index < this.musicAlbums.length ? {
         done: false, 
         value: this.musicAlbums[this.index++]
      	} : { done: true }
    }
}

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`)
}
