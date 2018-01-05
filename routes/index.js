'use strict';

const todoRouter = require('./todo');
const userRouter = require('./user-auth');
const googleUser = require('./google-user');
const TokenServ = require('../service/token');

module.exports = app => {

    app.use('/auth', [userRouter, googleUser]);

    app.use('/api/', (req, res, next) => {
        console.log(req.headers)
        const token = (req.headers || {}).authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unautharized Access' })
        }

        let decodedToken;

        try {
            decodedToken = TokenServ.verifyToken(token);
            next();
        } catch (error) {
            return res.status(401).json({ message: error.message })
        }

    });

    app.use('/api/todo', todoRouter);


};