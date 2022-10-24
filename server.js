const express =require("express");
const cors =require("cors");
require('dotenv/config')

// initialize express
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// import routes and pass to app as middleware
const lipaNaMpesaRoutes = require("./routes/routes.lipanampesa.js");
app.use("/api",lipaNaMpesaRoutes)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
