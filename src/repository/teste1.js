import data from "../db/fakeData.js";

const getUsers = () => {
    return data;
};

const countUser = (index) => {
    const user = data[index];
    let count = 1;

    if (user.count){
        count = user.count + 1;
    };
    const countData = {...data[index], count: count};
    data.splice(index, 1, countData);
};

export const repositoryTeste1 = {
    getUsers,
    countUser
};