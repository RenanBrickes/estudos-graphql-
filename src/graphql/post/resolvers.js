const post = async (_, { id }, { getPosts }) => {

    const fetchPost = await getPosts(`/${id}`);
    return fetchPost.json();
}

const posts = async (_, __, { getPosts }) => {
    const fetchPosts = await getPosts();
    return fetchPosts.json();
}

export const postResolver = {
    Query: {
        post,
        posts
    }
}