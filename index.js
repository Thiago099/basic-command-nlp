import express from 'express'

import command_controller from './controllers/command_controller.js'

const app = express()
const port = 3000

// json
app.use(express.json())

app.use(express.static('./dist'))

app.post('/api/command', command_controller)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})