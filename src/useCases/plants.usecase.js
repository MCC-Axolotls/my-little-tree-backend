import { Plant } from "../models/plants.model.js"

async function create({ plant }){
    return await Plant.create(plant)
}
async function getAll(){
    return await Plant.find()
}
async function getAllByParams({options}){
    return await Plant.find({...options})
}
async function getById({id}){
    return await Plant.findById(id)
}
async function updateById({id,newData,populateData}){
    if(populateData)
        return  await Plant.findByIdAndUpdate(id, newData, { new: true })
    return await Plant.findByIdAndUpdate(id, newData, { new: true })
}
async function deleteById({id}){
    return await Plant.findByIdAndDelete(id)
}

export default {
    create,
    getAll,
    getAllByParams,
    getById,
    updateById,
    deleteById
}