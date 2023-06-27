import { repositoryTeste1 } from "../repository/teste1.js";

const getUser = ( name ) => {
    const data = getUsers();

    for(let i = 0; i < data.length;  i++) {
        if(i.name == name) {
            return(data[i]);
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