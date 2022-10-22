const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

dotenv.config()
const app = express()

app.use(express.json())
app.use(require('./routes/users.route'))

 
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(process.env.PORT, () => {
    console.log('Connected...')
})