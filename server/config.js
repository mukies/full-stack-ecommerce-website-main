const mongoose = require('mongoose')

const databaseConnection = (async()=>{
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('database connected successfully.')
})()

module.exports = databaseConnection;