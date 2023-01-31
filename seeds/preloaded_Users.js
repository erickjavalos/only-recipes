const {User} = require('../models')

const userData = [
    {
        username: 'BillyBBOB808',
        email: 'billybob@test.com',
        password: 'e12341234123',
    },
    {
        username: 'EvilMandy667',
        email: 'EvilMandy@test.com',
        password: 'mandyisevil@2',
    },
]


const seedsuser = () => User.bulkCreate(userData)

module.exports = seedsuser