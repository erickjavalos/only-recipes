const {User} = require('../models')
const bcrypt = require('bcrypt')

const userData = [
    {
        id:1,
        // first_name: 'Bob',
        // last_name: 'Billy',
        username: 'BillyBBOB808',
        // experience: 'none',
        email: 'billybob@test.com',
        password: 'e',
    },
    {
        id:2,
        // first_name: 'Mandy',
        // last_name: 'Evil',
        username: 'EvilMandy667',
        // experience: '2 years',
        email: 'EvilMandy@test.com',
        password: 'mandyisevil@2',
    },
    // {
    //     first_name: 'Neal',
    //     last_name: 'Befourth',
    //     username: 'TheKing',
    //     email: 'IamTheKing@test.com',
    //     password: 'hailtheking@3',
    //     experience: '3 years',
    // },
    // {
    //     first_name: 'Jason',
    //     last_name: 'Todd',
    //     username: 'TheRealRobin',
    //     email: 'ILoveMyDaddyBats@test.com',
    //     password: 'IamRobin@4',
    //     experience: '5 years',
    // },
    // {
    //     first_name: 'Tom',
    //     last_name: 'Orrow',
    //     username: 'Today',
    //     email: 'Yesterday@test.com',
    //     password: 'timeline@5',
    //     experience: '9 years',
    // },
    // {
    //     first_name: 'Becca',
    //     last_name: 'Queen',
    //     username: 'QueenB',
    //     email: 'QueenBee1@test.com',
    //     password: 'Beccais1',
    //     experience: '10 years',
    // },
    // {
    //     first_name: 'Peter',
    //     last_name: 'Parker',
    //     username: 'Chefspidy',
    //     email: 'NotSoSpiderMan@test.com',
    //     password: 'MJay@1',
    //     experience: '12 years',
    // },
    // {
    //     first_name: 'Zac',
    //     last_name: 'Bac',
    //     username: 'ZacBacMacTacPac',
    //     email: 'MyNameIsZac@test.com',
    //     password: 'ZacTheName@1',
    //     experience: '14 years',
    // },
    // {
    //     first_name: 'Mario',
    //     last_name: 'Lopez',
    //     username: 'A.C.slater',
    //     email: 'SavedByTheBell@test.com',
    //     password: 'IloveKelly',
    //     experience: '15 years',
    // },  
    // {
    //     first_name: 'Tony',
    //     last_name: 'bologna',
    //     username: 'SandWichKing',
    //     email: 'Forgetaboutit@test.com',
    //     password: 'WhoGetsTurkey@7',
    //     experience: '16 years',
    // },
    // {
    //     first_name: 'Red',
    //     last_name: 'X',
    //     username: 'AmIRobin?',
    //     email: 'SoMuchCoolerThanRobin@test.com',
    //     password: 'XXXXXXXXX',
    //     experience: 'X years',
    // },
    // {
    //     first_name: 'Tom',
    //     last_name: 'Jerry',
    //     username: 'Tom&JerryFan',
    //     email: 'SpikeTheDog@test.com',
    //     password: 'MouseCatDog@7',
    //     experience: '20 years',
    // },
    // {
    //     first_name: 'Monday',
    //     last_name: 'Addams',
    //     username: 'TheAddamNoOneLikes',
    //     email: 'StillPartOfTheFam@test.com',
    //     password: 'Imatter2',
    //     experience: '20 years',
    // },
    
]


const seedsUser = () => User.bulkCreate(userData)

module.exports = seedsUser