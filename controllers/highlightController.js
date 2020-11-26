const axios = require('axios')

class Highlight {
  static async getHighlight (req, res, next) {
    try {
      console.log("Highlights")
      const response = await axios({
        url: "https://www.scorebat.com/video-api/v1/",
        method: "GET"
      })
      const highlight = response.videos
      const embedHighlight = response.embed
      res.status(200).json({highlight,embedHighlight})
    }
    catch(err) {
      next(err)
    }
  }
}

module.exports = Highlight