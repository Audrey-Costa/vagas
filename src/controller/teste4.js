import { serviceTeste4 } from "../service/teste4.js";

function updateUser(req, res) {
    const id =  req.query.id;
    const name = req.body.name;
    const job = req.body.job;

    if (!id) {
        return res.sendStatus(404);
    };
    const reg = serviceTeste4.updateUser(id, name, job);
    if (reg) {
        res.status(200).send(reg);
    }else{
        res.status(404).send("User not found");
    }

};

export const controllerTeste4 = {
    updateUser
};