import { serviceTeste3 } from "../service/teste3.js";

function deleteUser(req, res) {
    const name =  req.query.name;

    const deletedUser = serviceTeste3.deleteUser(name);
    if (deletedUser) {
        res.status(200).send("success");
    }else{
        res.status(404).send("User not found");
    };
};

export const controllerTeste3 = {
    deleteUser
};