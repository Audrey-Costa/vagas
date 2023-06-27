import { repositoryTeste2 } from "../repository/teste2.js";

function postUser(name, job){
    const newUser = repositoryTeste2.postUser(name, job);
    
    return newUser;
};

export const serviceTeste2 = {
    postUser
};