

const user = async (_, { id }, { getUsers }) => {
    const fetchUser = await getUsers(`/${id}`);
    return fetchUser.json();
}


const users = async (_, __, { getUsers }) => {
    const fetchUsers = await getUsers();
    return fetchUsers.json();
}

export const userResolver = {
    Query: {
        user,
        users
    }
}