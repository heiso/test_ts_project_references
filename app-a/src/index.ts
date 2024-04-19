import { createServer } from 'http'
import { handler } from './app'

createServer(handler).listen(process.env.PORT || 3000)
