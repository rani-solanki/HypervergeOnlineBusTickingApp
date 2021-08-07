const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require('./config/db.js');
const path = require('path');

var cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoutes = require('./router/api/users');
const authRoutes = require('./router/api/auth');
const AdminRoutes = require('./router/api/admin');
const adminAuthRoutes = require('./router/api/adminAuth');
const busRoutes = require('./router/api/bus');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admins', AdminRoutes);
app.use('/api/adminauth', adminAuthRoutes);
app.use('/api/buses', busRoutes);

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status).json(err)
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, "Frontend", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'Frontend', 'build', 'index.html'))
    });
}

var port = process.env.PORT || 1900;
app.listen(port, function (){
    console.log('Example app listening on port ' + port + '!');
});

module.exports = app
