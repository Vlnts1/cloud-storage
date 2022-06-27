const jwt = require('jsonwebtoken')

module.export = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next
    }
    try {
        const token = req.headers.authorization.split('')[1]
        if (!token) {
            return res.status(401).jspn({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, process.env.SECRETKEY)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).jspn({message: 'Auth error'})
    }
}