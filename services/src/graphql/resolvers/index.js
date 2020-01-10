import { GraphQLScalarType } from 'graphql';

import Manga from "./Manga.js";
import * as Query from "./Query";

const resolvers = {
    Manga,
    Query
};

export default resolvers;