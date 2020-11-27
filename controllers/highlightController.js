const axios = require('axios')

class Highlight {
  static async getHighlight (req, res, next) {
    try {
      console.log("Highlights")
      const response = await axios({
        url: "https://www.scorebat.com/video-api/v1/",
        method: "GET"
      })

      console.log(response.data)
      const arr = [];
      response.data.forEach(element => {
        if (element.competition.name === "ENGLAND: Premier League") {
          console.log(element)
          arr.push(element.videos)
        }
      })
      res.status(200).json({ arr })
    }
    catch(err) {
      next(err)
    }
  }
}

module.exports = Highlight