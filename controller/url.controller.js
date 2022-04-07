export const requestParser = (req, res, next) => {
    const jsonRes = {
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    }
    res.status(200).json(jsonRes)
}
