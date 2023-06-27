import data from "../db/fakeData.js";

function updateUser(id, name, job) {
    const reg = data.find(user => user.id == id);
    reg.name = name;
    reg.job = job;

    return reg;
};

export const repositoryTeste4 = {
    updateUser
};