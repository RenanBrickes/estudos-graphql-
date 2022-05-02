const user = () => {
    return {
        id: '1',
        userName: "rbrickes",
        password: 'rB123456'
    }
}

const users = () => {
    return [
        {
            id: '1',
            userName: "rbrickes",
            password: 'rB123456'
        },
        {
            id: '2',
            userName: "gvalerio",
            password: 'gV123456'
        },
        {
            id: '1',
            userName: "rrodrigues",
            password: 'rR123456'
        }
    ]
}

export const userResolver = {
    Query: {
        user,
        users,
    }
}