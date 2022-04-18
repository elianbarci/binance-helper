const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();

async function getBTCUSDT(testing) {

    const res = await axios({
            url: 'https://api.binance.com/api/v3/ticker/price',
            method: 'GET',
            timeout: 8000,
            params: {
                symbol : "BTCUSDTT"
            }
        })

        .catch(err => {
            console.log("Hubo un error")
            if (err.response) {
                console.log(err.response)
                throw err
            } else if (err.request) {
                throw err
            } else {
                throw err
            }

        })


    return res.data

}


async function getBADGERUSDT() {

    const res = await axios({
            url: 'https://api.binance.com/api/v3/ticker/price',
            method: 'GET',
            timeout: 8000,
            params: {
                symbol : "BADGERUSDT"
            }
        })

        .catch(err => {
            console.log("Hubo un erro")
            if (err.response) {
                console.log(err.response)
                throw err
            } else if (err.request) {
                // client never received a response, or request never left
                // console.log(err.request)
                throw err
            } else {
                // anything else
                throw err
            }

        })


    return res.data

}

async function sell(symbol, amount) {

    const res = await axios({
            url: ( (process.env.PRODUCTIVE == true) ? process.env.BINANCE_API : process.env.BINANCE_TESTNET_API ),
            method: 'GET',
            timeout: 8000,
            params: {
                symbol: symbol,
                amount: amount,
            }
        })

        .catch(err => {
            console.log("Hubo un error")
            if (err.response) {
                console.log(err.response)
                throw err
            } else if (err.request) {
                throw err
            } else {
                throw err
            }

        });

    return res.data

}

async function buy(symbol, amount) {

    const res = await axios({
            url: ( (process.env.PRODUCTIVE == true) ? process.env.BINANCE_API : process.env.BINANCE_TESTNET_API ),
            method: 'GET',
            timeout: 8000,
            params: {
                symbol: symbol,
                amount: amount,
            }
        })

        .catch(err => {
            console.log("Hubo un error")
            if (err.response) {
                console.log(err.response)
                throw err
            } else if (err.request) {
                throw err
            } else {
                throw err
            }

        });

    return res.data

}


async function getHistoricals(symbol, startTime, endTime, interval) {

    const res = await axios({
            url: 'https://testnet.binancefuture.com/fapi/v1/klines',
            method: 'GET',
            timeout: 8000,
            params: {
                startTime: startTime,
                endTime: endTime,
                interval: interval,
                symbol : symbol
            }
        })

        .catch(err => {
            console.log("Hubo un error")
            if (err.response) {
                console.log(err.response)
                throw err
            } else if (err.request) {
                throw err
            } else {
                throw err
            }

        });

    return res.data

}


exports.getBTCUSDT = getBTCUSDT
exports.getBADGERUSDT = getBADGERUSDT
exports.getHistoricals = getHistoricals
exports.buy = buy
exports.sell = sell