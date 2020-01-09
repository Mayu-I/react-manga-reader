import Manga from "#root/db/models/manga.js"

const mangasResolver = () => {
    return [
        {
            id: "1",
            image: "kitten.jpg",
            title: "One Piece"
        },
        {
            id: "2",
            image: "kitten2.jpg",
            title: "Two Piece"
        }
    ]
}

export default mangasResolver