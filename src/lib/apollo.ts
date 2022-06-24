import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rp0s8i1emp01yy63j9hqyl/master',
    cache: new InMemoryCache()
})