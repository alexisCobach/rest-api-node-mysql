const express = require('express');
const app = express();

// Settings
app.set('port', 8080);
// Middlewares
app.use(express.json());
// Routes
app.use(require('./routes/employees'));
// Starting the serverrr

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});