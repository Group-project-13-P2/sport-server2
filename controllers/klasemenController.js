const axios = require('axios')
class Klasemen {
    static async getKlasemen(req, res, next) {
        try {
            console.log('object');
            const { data } = await axios.get("http://api.football-data.org/v2/competitions/2021/standings",
            {
                "headers" : {
                    "X-Auth-Token" : "efcc91eb520d4b0eb0f58e667e2e93d2",
                    "area" : "England"
                }
            }
            )
            res.status(200).json(data)
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }
}

module.exports = Klasemen