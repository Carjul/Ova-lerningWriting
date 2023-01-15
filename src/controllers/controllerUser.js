import USER from '../models/user.js'

const GetUser =async(req,res)=>{
    try {
        const data =await USER.find()
        res.status(201).json(data) 
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

const GetUserId =async(req,res)=>{
    try {
        const {id}=req.params
        const data =await USER.findById(id)
        res.status(201).json(data) 
    } catch (error) {
        res.status(500).json(error.message) 
    }
}

const postUser = async(req,res)=>{
    try {
        const {name, email, password, avatar=`https://robohash.org/${password}`}= req.body
       await USER.create({name, email, password, avatar})
        res.status(200).json({msg:"usuario guardado"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const putUser = async(req,res)=>{
    try {
        const {name, email, password, avatar}= req.body
        const {id}= req.params
        await USER.findByIdAndUpdate(id,{name, email, password, avatar})
        res.status(200).json({msg:"usuario actualizado"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteUser = async(req,res)=>{
    try {
        const {id}= req.params
        await USER.findByIdAndDelete(id) 
        res.status(200).json({msg:"usuario eliminado"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export {GetUser,GetUserId,postUser,putUser,deleteUser};