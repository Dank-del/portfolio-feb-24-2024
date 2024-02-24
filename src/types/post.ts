export interface POSTByIDResponse {
    post: Post;
}

export interface Post {
    typename: string;
    title: string;
    content: Content;
    tags: Tag[];
    coverImage: CoverImage;
}

export interface Content {
    typename: string;
    markdown: string;
}

export interface Tag {
    typename: string;
    name: string;
}
export interface CoverImage {
    url: string;
}