import { repositoryTeste4 } from "../repository/teste4.js";

function updateUser(id, name, job) {
    const reg = repositoryTeste4.updateUser(id, name, job);

    return reg;
};

export const serviceTeste4 = {
    updateUser
};