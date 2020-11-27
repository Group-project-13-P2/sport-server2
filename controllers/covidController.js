const axios = require('axios')

class covidController {
    static async getCovidData(request, response, next) {
        const startDate = request.body.startDate;
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const endDate = yyyy + '-' + mm + '-' + dd;
        try {
            console.log('Hello from covid controller');
            console.log(endDate);
            const { data } = await axios.get(`https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/${startDate}/${endDate}`);
            response.status(200).json(data);
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }

    static async getCovidDataByDay(request, response, next) {
        const currentDay = request.body.currentDay;
        const country = request.body.country;
        try {
            console.log('Hello from covid controller');
            const { data } = await axios.get(`https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions/${country}/${currentDay}`);
            response.status(200).json(data);
        } catch (error) {
            console.log(error, 'test');
            next(error)
        }
    }
}

module.exports = covidController;