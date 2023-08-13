const express = require('express');
const axios = require('axios');
const profileRouter = express.Router();

// /api/profile GET profile
// http://localhost/api/profile



profileRouter.get('/api/profile', async function (req, res, next) {
  try {
    const url = "http://localhost:8000/profile";
    const response = await axios.get(url);
    console.log('response', response.data);
   res.status(200).json({
   msg: "get profile succeed",
   data:response.data,
  });
  // throw new Error('Server error');
  } catch (error) {
    console.error('error',error);
    next(error);
  }
});





module.exports = profilerouter;

