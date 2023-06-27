import { repositoryTeste3 } from "../repository/teste3.js";

function deleteUser(name) {
    const deleted = repositoryTeste3.deleteUser(name);    

    return deleted;
};

export const serviceTeste3 = {
    deleteUser
};