const authenticationToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split('')[1]
    }
     catch (e) {
        res.sendStatus(403)
    }
}