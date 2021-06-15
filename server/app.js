const express = require('express');
const cors = require('cors');
require('dotenv').config();

const testRoutes = require('./routes/test');

const app = express();

app.use(express.json());
app.use(cors());

app.use(testRoutes);

const port = process.env.PORT || 4001;

app.listen(port, () => {{
  console.log(`Server is running on port ${port}`)
}});