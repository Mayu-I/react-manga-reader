import Manga from "#root/db/models/Manga.js"

const mangasResolver = () => {
    // return Manga.find({}).sort({ lastUpdated: -1 });
    Manga.find({}).then(stuff => {
        console.log(stuff);
    });
};

export default mangasResolver;