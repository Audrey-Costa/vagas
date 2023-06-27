import { repositoryTeste2 } from "../repository/teste2.js";
import jwt from 'jsonwebtoken';

function postUser(name, job){
    const newUser = repositoryTeste2.postUser(name, job);
    
    if (!newUser){
        return {undefined, undefined};
    };

    const newUserResponse = {
        name: newUser.name,
        job: newUser.job
    };

    const secret = process.env.TOKEN_SECRET_KEY ?? '';
    const payload = newUser.id;
    const token = jwt.sign(payload, secret);
    
    return {newUserResponse, token};
};

export const serviceTeste2 = {
    postUser
};