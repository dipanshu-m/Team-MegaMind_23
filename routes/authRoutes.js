const express = require('express')
const { Router } = require('express')
const router = Router();
require('dotenv').config();
// const fb= require('../dist/bundle')
const { createAcc, data } = require('../model/firebase')

router.get('/signup', (request, resolve) => {
    resolve.render('./auth/signup');
});

router.post('/signup', async (request, resolve) => {
    const { email, password } = request.body;
    console.log(email, password);
    var user = await createAcc(email, password);
    if (user.success == true) {
        resolve.render('./auth/signup');
    }
    else {
        if (user.code != null || user.error.code === 'auth/email-already-in-use') {
            // resolve.render('./auth/signup', {user});
            resolve.send({user})
        }
        // resolve.send({user})
        console.log(user.error.code);
    }
});

router.get('/login', (request, resolve) => {
    resolve.render('./auth/login');
});

router.post('/login', (request, resolve) => {
});

router.get('/logout', (request, resolve) => {

});

module.exports = router;