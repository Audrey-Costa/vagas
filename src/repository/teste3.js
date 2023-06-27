import data from "../db/fakeData.js";

function deleteUser(name) {
    for(let i = 0; i < data.length;  i++) {
        if(data[i].name == name) {
            data.splice(i, 1);
            return true;
        };
    };
    return false;
};

export const repositoryTeste3 = {
    deleteUser
};