import { repositoryTeste5 } from "../repository/teste5.js";

function getUserAccessCounter(name){
    const count = repositoryTeste5.getUserAccessCounter(name);
    return count;
};

export const serviceTeste5 = {
    getUserAccessCounter
};