import { serviceTeste2 } from "../service/teste2.js";

function postUser(req, res){
    const name =  req.body.name;
    const job =  req.body.job;

    const newUser = serviceTeste2.postUser(name, job);
    
    res.status(201).send(newUser);
};

export const controllerTeste2 = {
    postUser
};