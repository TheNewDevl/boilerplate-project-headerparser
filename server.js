import http from 'http'
import { AppManager } from './app.js'


class Server {

  constructor(port = 3000) {
    this.port = port
    this.app = new AppManager(this.port)

    this.app.init()

    this.server = http.createServer(this.app.getExpress())

  }

  start() {
    this.server.listen(this.app.getPort(), async () => {
      console.log('Starting server on port ' + this.app.getPort())
    })
  }
}

new Server(3000).start()

