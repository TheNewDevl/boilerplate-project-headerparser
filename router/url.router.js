import express from 'express'
import * as requestController from '../controller/url.controller.js'

const router = express.Router()

router.use('/whoami', requestController.requestParser)

export default router