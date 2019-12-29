const express = require('express')
const app = express()
const breweryRoutes = require('./routes/breweryRoutes')

app.use('/', breweryRoutes)

app.listen(3000, () => console.log('index working'))











// const express = require('express')
// const app = express()
// const houseRoutes = require('./routes')

// app.use('/', houseRoutes )

// app.listen(4000)

