import express from "express"
import cors from 'cors'
import compression from 'compression'
import bodyParser from "body-parser"

export default function App(functionName) {
    const app = express()
    const router = express.Router()

    router.use(compression())

    const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

    router.get('/', (req, res) => {
        const html = `
            <h1>Hello World</h1>
        `
        res.send(html)
    })

    router.post('/webhook', (req, res) => {
        console.log(req.body)
        res.status(200).end()
    })

    app.use(routerBasePath, router)
    router.use(cors())
    router.use(bodyParser.json())
    router.use(bodyParser.urlencoded({
        extended: true
    }))

    return app
}