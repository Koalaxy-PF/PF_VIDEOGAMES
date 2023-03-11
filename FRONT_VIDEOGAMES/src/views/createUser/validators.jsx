
const edadValidator = (value) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());

   
    const anoNacimiento = parseInt(String(value).substring(0, 4));
    const mesNacimiento = parseInt(String(value).substring(5, 7));
    const diaNacimiento = parseInt(String(value).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }

    console.log(edad)

    if(edad >= 14){
        return true
    }{
        return false
    }
};

export { edadValidator }

