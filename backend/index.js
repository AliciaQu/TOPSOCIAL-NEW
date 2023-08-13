const cors = require('cors');
const express = require('express');
const router = require('./routes/index');
const { handleErrors } = require('./middlewares/errorHandler');

const app = express();

app.use (cors());
app.use(express.json());
app.use(router);
app.use(handleErrors);
const PORT =80;
app.listen(PORT, function (){
  console.log('Server is running on http://localhost: 80');
});

