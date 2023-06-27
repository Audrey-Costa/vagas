import data from "../db/fakeData.js";
import { repositoryTeste1 } from "./teste1.js";

function postUser(name, job){
    const users = repositoryTeste1.getUsers();
    const user = users.find(user => user.name === name);
    
    if(user){
        return undefined;
    };

    const newUser = {
        id: data.length + 1,
        name: name,
        job: job,
    };
    
    data.push(newUser);

    return newUser;
};

export const repositoryTeste2 = {
    postUser
};