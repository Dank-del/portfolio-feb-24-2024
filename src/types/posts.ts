export interface PostGQLResponse {
    user: User;
}

export interface User {
    typename: string;
    posts:    Posts;
}

export interface Posts {
    typename: string;
    nodes:    Node[];
}

export interface Node {
    typename:   string;
    title:      string;
    id:         string;
    tags:       Tag[];
    url: string;
    readTimeInMinutes: number;
    coverImage: CoverImage;
}

export interface CoverImage {
    typename: string;
    url:      string;
}

export interface Tag {
    typename: Typename;
    name:     string;
}

export type Typename = "Tag";
