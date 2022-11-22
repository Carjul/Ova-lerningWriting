import {connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const {mongodb_uri} = process.env


export default connect(`${mongodb_uri}`)
.then(() => console.log('db conectada'))
.catch(err => console.error(err))
