const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) => {

    const petInfo = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    const id = Math.floor(Math.random() * 1000).toString()
    if(!nombre || !edad || !tipo || !color || !enfermedad){
        console.log("Por favor incluya el nombre, edad, tipo, color, y enfermedad de su mascota")
        return
    }
    petInfo.push({ id, nombre, edad, tipo, color, enfermedad })


    fs.writeFileSync("citas.JSON", JSON.stringify(petInfo));
    console.log(`cita para ${nombre} creada con exito`);
}

const leer = () => {
    const x = JSON.parse(fs.readFileSync("./citas.json", 'utf8'))
    console.log(x)
}

const update = (id, nombre, edad, tipo, color, enfermedad) => {
    const petInfo = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    const index = petInfo.findIndex(e => e.id === id)
    petInfo[index] = {id, nombre, edad, tipo, color, enfermedad}
    fs.writeFileSync("citas.json", JSON.stringify(petInfo))
    console.log(`Cita para ${nombre} modificada`)
}
const del = (id) => {
    const petInfo = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    const index = petInfo.findIndex(e => e.id === id)
    petInfo.splice(index,1) 
    fs.writeFileSync("citas.json", JSON.stringify(petInfo))
    console.log(`Cita id:${id} eliminada`)
}


module.exports = {registrar, leer, update, del}