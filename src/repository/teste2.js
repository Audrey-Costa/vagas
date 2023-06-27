import data from "../db/fakeData.js";

function postUser(name, job){
    const newUser = {
        id: data.length,
        name: name,
        job: job,
    };

    data.push(newUser);
    
    return(newUser);
};

export const repositoryTeste2 = {
    postUser
};