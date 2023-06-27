import { repositoryTeste1 } from "../repository/teste1.js";

const getUser = ( name ) => {
    const data = getUsers();

    for(let index = 0; index < data.length; index++) {
        if(data[index].name == name) {
            repositoryTeste1.countUser(index);
            return(data[index]);
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