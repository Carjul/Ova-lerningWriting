import server  from './src/app.js'
import './src/db.js'

server.listen(server.get('port'),()=> console.log(`server run on port ${server.get('port')}`))