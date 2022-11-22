import USER from '../models/user.js'
import NOTAS from '../models/notas.js'

const GetNota =async(req,res)=>{
    try {
        const {id}= req.query 
        const data =await NOTAS.find({userid:id})
        res.status(201).json(data) 
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

const postNota =async(req,res)=>{
    try {
        const {id}= req.params 
        const user = await USER.findById(id)
        const {evaluacion,nota}= req.body
        await NOTAS.create({userid:user._id,evaluacion,nota})
        res.status(201).json({msg:"guardado"}) 
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

const deleteNota =async(req,res)=>{
    try {
        const {id}= req.params 
        await NOTAS.findByIdAndDelete(id)
        res.status(201).json({msg:"borrado"}) 
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

export {GetNota,postNota,deleteNota}