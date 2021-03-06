const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// const logger = require('./middleware/logger')

const app = express();

//init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//BOdy Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extented: false}));


// Set Static folder
app.use(express.static(path.join(__dirname,'public')));

//Member API Router
app.use('/api/members', require('./routes/api/members'));
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)); 