const faker = require('faker');
const  {getUser, getUsers} = require('../datastore');

const createRandomUserSync = () => {
    const user = {};
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.userName = `${user.lastName.substring(0,3)}${user.firstName.substring(0,3)}`;
    user.email = `${user.firstName}.${user.lastName}@${user.firstName}${user.lastName}.${faker.internet.domainSuffix()}`.toLocaleLowerCase();
    user.phone = faker.phone.phoneNumber();
    return user;
};

const seedUsers = async (users) => {
    const existingUsers = await getUsers();
    if(existingUsers.length >0) {
        console.log('Users alread seeded');
        return existingUsers;
    }
    const numberOfUsers = users || 10;
    const arr = [];
    for(let i= 0; i<numberOfUsers;i++){
        const randomUser = createRandomUserSync();
        const user = await getUser();
        user.firstName = randomUser.firstName;
        user.lastName = randomUser.lastName;
        user.email = randomUser.email;
        user.phone = randomUser.phone;
        console.log({message: 'Creating seed user', user, createDate: new Date()});
        const result = await user.save();
        arr.push(result)
    }

    if(arr.length > 0)return arr;
};
module.exports = {seedUsers,createRandomUserSync};