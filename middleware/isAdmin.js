const User = require('../models/users');
module.exports = async (req, res, next) => {
    const isAdmin = req.user.isAdmin;
    if (!isAdmin) {
        const err = { status: 401, msg: 'No token, authorization failed'}
        return next(err)
    }
    next()
}



