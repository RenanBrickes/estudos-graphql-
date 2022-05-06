const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userApi.getUsers(input);
  return users;
};

const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id);
  return user;
};

const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postApi.batchLoadByUserId(id);
};

const createUser = (_, { data }, { dataSources }) => {
  return dataSources.userApi.postUser(data, dataSources);
}

const editUser = (_, { userId, data }, { dataSources }) => {
  return dataSources.userApi.editUser(userId, data, dataSources);
}

const deleteUser = (_, { userId }, { dataSources }) => {
  return dataSources.userApi.deleteUser(userId);
}

export const userResolvers = {
  Query: { user, users },
  User: { posts },
  Mutation: { createUser, editUser, deleteUser }
};