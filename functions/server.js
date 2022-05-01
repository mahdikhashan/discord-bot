import serverless from 'serverless-http'
import expressApp from './app'

const functionName = "server"

const app = expressApp(functionName)

exports.handler = serverless(app)