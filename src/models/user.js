import {Schema, model} from 'mongoose'

import '../db.js'

const user = new Schema( {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password:{type: String, require: true},
    avatar: String
})

export default  model("USER", user)