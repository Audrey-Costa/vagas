import { serviceTeste5 } from "../service/teste5.js";

function getUserAccessCounter(req, res){
    const name =  req.query.name;

    const count = serviceTeste5.getUserAccessCounter(name);

    if (count === null){
        res.status(404).send(`Usuário não encontrado.`);
    }else{
        res.status(200).send(`Usuário ${name} foi lido ${count} vezes.`);
    };
};

export const controllerTeste5 = {
    getUserAccessCounter
};