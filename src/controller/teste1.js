import { serviceTeste1 } from "../service/teste1.js";

const getUser = ( req, res ) => {
    const name =  req.query.name;
    
    const user = serviceTeste1.getUser(name);
    if (user) {
        const dataResponse = {
            id: user.id,
            name: user.name,
            job: user.job
        };
        res.status(200).send(dataResponse);
    }else{
        res.status(404).send("User not found");
    };
};

const getUsers = ( req, res ) => {
    const users = serviceTeste1.getUsers();
    const dataResponse = users.map(user => {
        return {
            id: user.id,
            name: user.name,
            job: user.job
        };
    });
    res.send(dataResponse);    
};

export const controllerTeste1 = {
    getUser,
    getUsers
};