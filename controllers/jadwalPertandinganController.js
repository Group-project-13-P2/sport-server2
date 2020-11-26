const axios = require('axios');

class JadwalPertandinganController {

    static async getNext5(req,res,next){
        console.log('==== Get Jadwal Pertandingan =====')
        try {
            const next15Match = await axios({
                method : 'GET',
                url : 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328'
            })
            console.log(next15Match)
            if(next15Match){
                res.status(200).json({
                    next5Match : next15Match.data
                })
            }else {
                throw {
                    status : 400,
                    message : 'Something wrong'
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async getLast5(req,res,next){
        console.log('==== Get Last 5=====')
        try {
            const last15match = await axios({
                method : 'GET',
                url : 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328'
            })

            console.log(last15match.data)
            const data = last15match.data
            if(last15match){
                res.status(200).json({
                    last15match : data
                })
            }else {
                throw {
                    status : 400,
                    message : 'Something Wrong'
                }
            }
        } catch (error) {
            next(error)
        }
    }
}


module.exports = JadwalPertandinganController