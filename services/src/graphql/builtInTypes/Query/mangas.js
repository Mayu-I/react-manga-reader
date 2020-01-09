import Manga from "#root/db/models/Manga";

const mangasResolver = () => {
    Manga.find({}).then(stuff => {
        console.log(stuff);
    })
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
        },
    ];
};

export default mangasResolver;