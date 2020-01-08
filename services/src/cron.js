import axios from "axios";
import "dotenv/config";
import cron from "node-cron";
import "#root/db/connection";
import Manga from "#root/db/models/Manga";

const axiosME = axios.create({
    baseURL: process.env.MANGA_EDEN_URL,
});

const transformMangaEden = manga =>
    manga
        .filter(manga => manga.ld)
        .map(
            ({
                a: alias,
                c: categories,
                h: hits,
                i: _id,
                im: image,
                ld: lastUpdated,
                s: status,
                t: title
            }) => ({
                _id,
                alias,
                categories,
                hits,
                image,
                lastUpdated,
                status,
                title
            })
        );

const seed = async () => {
    const res = await axiosME.get();
    const mangas = transformMangaEden(res.data.manga);

    console.log(`mangas back, got ${mangas.length}`);

    await Manga.insertMany(mangas);

    console.log("seeded");
};

seed();

cron.schedule("0 * * * *", () => {
    console.log("runnning a task every hour");
})