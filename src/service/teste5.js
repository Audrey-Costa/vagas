import { serviceTeste1 } from "./teste1.js"

function getUserAccessCounter(name){
    const users = serviceTeste1.getUsers();
    const user = users.find(user => user.name === name);
    if(!user){
        return null;
    }
    if (user.count) {
        const count = user.count
        return count;
    }else{
        return 0;
    };
};

export const serviceTeste5 = {
    getUserAccessCounter
};