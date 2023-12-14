const {registrar, leer, update, del} = require("./operaciones.js")
const [action, id, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

if (action === "registrar"){
    registrar(id, nombre, edad, tipo, color, enfermedad)
}

if (action === "leer"){
    leer()
}

if (action === "del"){
    del(id)
}

if (action === "update"){
    update(id, nombre, edad, tipo, color, enfermedad) 
}