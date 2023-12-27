const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const templateRoutes = require('./templateRoutes');

app.use('/api', templateRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));

