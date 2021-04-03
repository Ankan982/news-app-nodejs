const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');




const app = express();


// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Static Files


// Templating Engine
app.engine('hbs', exphbs({ extname: '.hbs' })); 
app.set('view engine', 'hbs');



// Routes
const routes = require('./server/routes/news');
app.use('/', routes);

// Listen on port 
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`));