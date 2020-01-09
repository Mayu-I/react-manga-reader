import Manga from "#root/db/models/Manga"

const mangasResolver = () => {
    return Manga.find({});
    // return Manga.find({});
    // return [
    //     {
    //         id: "1",
    //         image: "kitten.jpg",
    //         title: "One Piece"
    //     },
    //     {
    //         id: "2",
    //         image: "kitten2.jpg",
    //         title: "Two Piece"
    //     }
    // ]
};

export default mangasResolver;