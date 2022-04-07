// Import Express
import express from 'express'
import cors from 'cors'
import router from './router/url.router.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class AppManager {

    constructor(port = 3000) {
        this.port = port
    }

    init() {

        this.app = express()
        this.app.set('port', this.port)
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        this.app.use('/api', router)


        this.app.use(function (err, req, res, next) {
            res.status(500).send({ error: err.stack });
        });

        this.app.use((req, res) => {
            res.status(404).send('Page not found')
        })
    }

    getPort() {
        return this.port
    }

    getExpress() {
        if (this.app === null) {
            throw new Error('App is null')
        }
        return this.app
    }
}




