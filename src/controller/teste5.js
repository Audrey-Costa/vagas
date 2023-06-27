import { serviceTeste5 } from "../service/teste5.js";

function getUserAccessCounter(req, res){
    const name =  req.query.name;

    const count = serviceTeste5.getUserAccessCounter(name);

    res.status(200).send("Usuário " +  name  + "  foi lido 0 vezes.");
};

export const controllerTeste5 = {
    getUserAccessCounter
};