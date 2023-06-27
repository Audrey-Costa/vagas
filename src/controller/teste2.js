import { serviceTeste2 } from "../service/teste2.js";

function postUser(req, res){
    const name =  req.body.name;
    const job =  req.body.job;
    
    const {newUserResponse, token} = serviceTeste2.postUser(name, job);

    //Trhows an error if an user already exists doing newUser undefined.
    if (!newUserResponse){
        throw {type: "Conflict", message:"User already registred"};
    };

    res.header("token", token).status(201).send(newUserResponse);
};

export const controllerTeste2 = {
    postUser
};