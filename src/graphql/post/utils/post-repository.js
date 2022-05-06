import { ValidationError } from "apollo-server";

export const createPostFn = async (postData, dataSources) => {
    const postInfo = await createPostInfo(postData, dataSources);
    const { title, body, userId } = postInfo;

    if (!title || !body || !userId)
        throw new ValidationError(`Você precisa enviar os dados correto`);

    return await dataSources.post('', {... postInfo});
}

const userExists = async (userId, dataSources) => {
    try {

        await dataSources.context.dataSources.userApi.get(userId);
    }
    catch (e) {
        throw new ValidationError(`Usuário  ${userId} não existe`);
    }
}

const createPostInfo = async (postData, dataSources) => {
    const { title, body, userId } = postData;

    await userExists(userId, dataSources);

    const indexRefPost = await dataSources.get('', {
        _limit: 1,
        _sort: 'indexRef',
        _order: 'desc'
    });
    const indexRef = indexRefPost[0].indexRef + 1;

    return {
        title,
        body,
        userId,
        indexRef,
        createdAt: new Date().toISOString()
    }
}