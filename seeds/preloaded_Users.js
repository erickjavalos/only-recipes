const {User} = require('../models')
const bcrypt = require('bcrypt');

const userData = [
    {
        id:1,
        username: 'BillyBOB808',
        email: 'billybob@test.com',
        password: 'e12341234123',
    },
    {
        id:2,
        username: 'EvilMandy667',
        email: 'EvilMandy@test.com',
        password: 'mandyisevil@2',
    },
]
// const Userpasswprd = userDataWithHashedPasswords;
// const userDataWithHashedPasswords = userData.map(user => {
//     user.password = bcrypt.hash(user.password, 10);
//     return user;
// })

User.bulkCreate(userData)

const seedsuser = () => User.bulkCreate(userData)

module.exports = seedsuser