import { GraphQLScalarType } from 'graphql';

import Manga from "./Manga.js";
import * as Query from "./Query";

const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date',
        serialize(value) {
            return "foo";
        },
    }),
    Manga,
    Query
};

export default resolvers;