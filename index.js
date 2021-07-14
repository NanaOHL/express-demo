const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const members = require('./Members');

const app = express();



//init middleware
app.use(logger)


// Get members
app.get('/api/members', (req, res) => res.json(members));



// Set Static folder
app.use(express.static(path.join(__dirname,'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));