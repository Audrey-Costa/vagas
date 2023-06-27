import { repositoryTeste1 } from "../repository/teste1.js";

const getUser = ( name ) => {
    const data = getUsers();

    for(const user of data) {
        if(user.name == name) {
            return(user);
        };
    };
    return null;
};

const getUsers = () => {
    const data = repositoryTeste1.getUsers();
    return data;
};

export const serviceTeste1 = {
    getUser,
    getUsers
};