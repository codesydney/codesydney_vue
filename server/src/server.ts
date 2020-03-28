import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App started on PORT ${PORT}`)
})
