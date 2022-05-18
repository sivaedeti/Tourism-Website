const express = require('express');
const router = express.Router();
const { Customer } = require('../models/customer');

router.post('/', async(req, res) => {
    let customer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    })

    customer = await customer.save();
    res.redirect('/')
})

module.exports = router;