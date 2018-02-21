const express = require('express');
const app = express();

// settings port, data, template engine
app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');

// use static assets
app.use(express.static(path.join(__dirname, 'public')));

// use routes defined in modules
app.use(require('./routes/index'));

// server
app.listen(app.get('port'));