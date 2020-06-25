import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotEnv from 'dotenv'
import bodyParser from 'body-parser'
import path from 'path'

// Route imports
import productsRouter from './routes/products.js'

dotEnv.config()

const port = process.env.PORT || 5000
const runTimeMode = process.env.PORT == null ? 'development' : 'production'

const uri =
    runTimeMode === 'development' ? 'mongodb://localhost/garbanzo' : 'bruh'
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
} // extra garbage

mongoose.connect(uri, mongooseConfig)
const db = mongoose.connection

db.once('open', () => console.log('Connected to database'))
db.on('error', err => console.error(err))

const app = express()

app
    // Middlewares
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    // Routes
    .use('/api/products', productsRouter)
    .use('/api/uploads', express.static(path.join(path.dirname(''), 'uploads')))

if (runTimeMode === 'production') {
    app
        // Production routes
        .use(express.static('client/build'))
        .get('*', (req, res) => {
            res.sendFile(
                path.resolve(path.dirname('', 'client', 'build', 'index.html'))
            )
        })
}

app.listen(port, () => console.log(`Server be runnin on ${port}`))
