const post = () => {
    return {
        id: '1',
        title: "Another one post",
    }
}

const posts = () => {
    return [
        {
            id: '1',
            title :'Post 1'
        },
        {
            id: '2',
            title :'Post 2'
        },
        {
            id: '2',
            title :'Post 3'
        }
    ]
}

export const postResolver = {
    Query: {
        post,
        posts
    }
}