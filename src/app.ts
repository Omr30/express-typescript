import express from 'express'
import router from './routes/diaries'

const app = express()
const PORT = 8080

app.use(express.json())
app.use('/api/diaries', router)

app.listen(PORT, () => {
  console.log(`Server run in port ${PORT}`)
})
