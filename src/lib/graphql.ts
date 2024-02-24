import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://gql.hashnode.com/',
    cache: new InMemoryCache(),
});

const GET_POSTS = gql(`
query {
    user(username: "sayanbiswas") {
        posts(pageSize: 20, page: 1) {
          nodes {
            readTimeInMinutes
            title
            id
            tags {
              name
            }
            coverImage {
              url
            }
            url
          }
        }
      }
}
`)

const GET_POST = gql(`
query($id: ID!) {
    post(id: $id) {
      title
      content {
        markdown
      }
      tags {
        name
      }
      coverImage {
        url
      }
    }
  }
`)


export { client as graphqlClient, GET_POSTS, GET_POST }