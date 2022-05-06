import { ValidationError } from "apollo-server";

export const postUserfn = async (user, dataSources) => {
    const { firstName, lastName, userName } = user;
    console.log(user);
    if (!firstName || !lastName || !userName)
        throw new ValidationError("O dados de usuário são obrigátorios.");

    user.indexRef = await getLastRefUser(dataSources) + 1;

    const result = await dataSources.post('', { ...user });

    return !!result;
}

export const editUserFn = async (userId, user, dataSources) => {

    await userExist(userId, dataSources);

    const { firstName, lastName, userName } = user;

    if (typeof firstName !== 'undefined') {
        if (!firstName)
            throw new ValidationError(`firstName é obrigatorio`);
    }
    if (typeof lastName !== 'undefined') {
        if (!lastName)
            throw new ValidationError(`lastName é obrigatorio`);
    }

    if (typeof userName !== 'undefined') {
        if (!userName)
            throw new ValidationError(`userName é obrigatorio`);
    }
    const result = dataSources.patch(userId, { ...user });

    return !!result;

}

export const deleteUserFn = async (userId, dataSources) => {
    const result = await dataSources.delete(userId);
    return !!result;
}


const userExist = async (userId, dataSources) => {
    const user = await dataSources.getUser(userId);
    return user;
}

const getLastRefUser = async (dataSources) => {

    const dados = await dataSources.get('', {
        _limit: 1,
        _sort: 'indexRef',
        _order: 'desc'
    });
    return dados[0].indexRef;
}