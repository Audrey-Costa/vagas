import data from "../db/fakeData.js";

function updateUser(id, name, job) {
    const reg = data.find(user => user?.id == id);
    const index = data.findIndex(user => user?.id == id);

    if (!reg || index === -1){
        return null;
    }

    reg.name = name;
    reg.job = job;
    data.splice(index, 1, reg);

    return reg;
};

export const repositoryTeste4 = {
    updateUser
};