import {Schema, model} from 'mongoose'

import '../db.js'

const notas = new Schema( {
    userid: { type: String, required: true },
    evaluacion: { type: String, required: true },
    nota:{type: String, require: true},

})

export default  model("NOTAS", notas)