import { ValidationError } from "apollo-server";

export const createPostFn = async (postData, dataSources) => {
    const postInfo = await createPostInfo(postData, dataSources);
    const { title, body, userId } = postInfo;

    if (!title || !body || !userId)
        throw new ValidationError(`Você precisa enviar os dados correto`);

    return await dataSources.post('', { ...postInfo });
}

export const updatePostFn = async (postId, postData, dataSources) => {

    if (!postId)
        throw new ValidationError(`Você precisa informar o id do post`);

    const { title, body, userId } = postData;

    if (typeof title !== 'undefined') {
        if (!title)
            throw new ValidationError(`Title é obrigatorio`);
    }
    if (typeof body !== 'undefined') {
        if (!body)
            throw new ValidationError(`Body é obrigatorio`);
    }

    if (typeof userId !== 'undefined') {
        if (!userId)
            throw new ValidationError(`User é obrigatorio`);
        await userExists(userId, dataSources);
    }

    return await dataSources.patch(postId, { ...postData });
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