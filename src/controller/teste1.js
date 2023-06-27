import { serviceTeste1 } from "../service/teste1.js";

const getUser = ( req, res ) => {
    const name =  req.query.name;
    
    const user = serviceTeste1.getUser(name);
    if (user) {
        res.status(200).send(user);
    }else{
        res.sendStatus(404);
    };
};

const getUsers = ( req, res ) => {
    const users = serviceTeste1.getUsers();
    
    res.send(users);    
};

export const controllerTeste1 = {
    getUser,
    getUsers
};