const express = require('express');
const axios = express('axios');

const profileRouter = require("./profile");



// create router 

const router = express.Router();
router.use('profileRouter');

module.exports = router;
