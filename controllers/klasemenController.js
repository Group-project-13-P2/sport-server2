const axios = require('axios')
class Klasemen {
    static async getKlasemen(req, res, next) {
        try {
            console.log('object');
            const { data } = await axios.get("http://api.football-data.org/v2/competitions",
            )
            res.status(200).json(data)
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }
}

module.exports = Klasemen