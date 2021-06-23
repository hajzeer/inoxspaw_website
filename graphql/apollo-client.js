/** @format */

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://inox-spaw.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export { client };
