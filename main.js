const d = document;


const inputDay = d.querySelector(".input-day");
const inputMonth = d.querySelector(".input-month");
const inputYear = d.querySelector(".input-year");

const errorDia = d.querySelector(".error-dia");
const errorMes = d.querySelector(".error-mes");
const errorAnio = d.querySelector(".error-anio");

const spanYear = d.querySelector(".span-year")
const spanMonth = d.querySelector(".span-month")
const spanDay = d.querySelector(".span-day")



/*  VALIDACIONES SOLO NUMEROS   */
var ExpRegSoloNumeros="^[0-9]+$";

inputDay.addEventListener("keypress", el => {
    /* console.log("presione arriba", el.key); */
    el.preventDefault();    //detengo la ejecucion
    //valido que ingrese solo 2 numeros del 0 al 9
    if((el.key.match(ExpRegSoloNumeros)!=null) && (inputDay.value.length<2)){
        /* console.log("Numero Valido"); */
        inputDay.value = inputDay.value+el.key
    }
    /* console.log(inputDay.value.length); */
})

inputMonth.addEventListener("keypress", el => {
    /* console.log("presione arriba", el.key); */
    el.preventDefault();    //detengo la ejecucion
    //valido que ingrese solo 2 numeros del 0 al 9
    if((el.key.match(ExpRegSoloNumeros)!=null) && (inputMonth.value.length<2)){
        /* console.log("Numero Valido"); */
        inputMonth.value = inputMonth.value+el.key
    }
    /* console.log(inputMonth.value.length); */
})

inputYear.addEventListener("keypress", el => {
    /* console.log("presione arriba", el.key); */
    el.preventDefault();    //detengo la ejecucion
    //valido que ingrese solo 2 numeros del 0 al 9
    if((el.key.match(ExpRegSoloNumeros)!=null) && (inputYear.value.length<4)){
        /* console.log("Numero Valido"); */
        inputYear.value = inputYear.value+el.key
    }
    /* console.log(inputYear.value.length); */
})


// VALIDACION DE FECHA

const anio = new Date().getFullYear()
//const mes = new Date().getMonth;
const fecha = new Date();
console.log(fecha);
/* const dia = new Date().getFullMonth() */
console.log(anio);

let fechaAgregar = new Date("02 31 2022")    //aca poner los input
//let fechaAgregar = new Date(`${inputMonth.value} ${inputDay.value} ${inputYear.value}`)
console.log(fechaAgregar);
/* if (fechaAgregar === "Invalid Date"){ */


d.addEventListener("click", el =>{
    
    if (el.target.matches("img")){
        
        console.log("-----------------------------");
        console.log(inputDay.value);
        console.log(inputMonth.value);
        console.log(inputYear.value);
        let fechaActual = new Date();
        let fechaAgregar = new Date(`${inputMonth.value} ${inputDay.value} ${inputYear.value}`)
        /* let fechaAgregar = new Date("02 32 2022") */
        console.log(fechaAgregar);
        console.log(fechaAgregar.getMonth()+1);

        
        /* if ((fechaAgregar != "Invalid Date") && (parseInt(inputMonth.value) === (fechaAgregar.getMonth()+1))){ */
        if ((fechaAgregar != "Invalid Date") && (parseInt(inputMonth.value) === (fechaAgregar.getMonth()+1))){
            console.log("Fecha biennnnnnnnnnnnnnnnn");
            inputDay.classList.remove("error-input-mostrar");
            errorDia.classList.remove("error-fecha-mostrar");
                        

            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth()+1;
            const anio = fechaActual.getFullYear();
            console.log(mes+" "+dia+" "+anio);

            const soloFechaActual = new Date(`${mes} ${dia} ${anio}`);
            console.log(soloFechaActual);

            let operacioFecha = soloFechaActual - fechaAgregar;
            console.log(operacioFecha);
            
            let msAño = 1000*60*60*24*365;
            let msMes = 1000*60*60*24*30;
            let msDia = 1000*60*60*24;


            let ponerAnio = Math.trunc(operacioFecha/msAño);
            let restoAnio = (operacioFecha%msAño);
            let ponerMes = Math.trunc(restoAnio/msMes);
            let restoMes = (restoAnio%msMes);
            let ponerDia = Math.trunc(restoMes/msDia);
            console.log(ponerAnio+" "+ ponerMes+" "+ponerDia);


            spanYear.innerHTML = ponerAnio;
            spanMonth.innerHTML = ponerMes;
            spanDay.innerHTML = ponerDia;
            




        } else {    //  TODAS LAS VALIDACIONES SI VA POR EL LADO ERROR
            console.log("fecha invalida");

            spanYear.innerHTML = "--";
            spanMonth.innerHTML = "--";
            spanDay.innerHTML = "--";
            
            //valido el año

            console.log("*****--------"+inputYear.value);
            if ((parseInt(inputYear.value) > 0) && (parseInt(inputYear.value) < anio+1)){
                /* console.log("entre"); */
                console.log("ERROR EN EL AÑO");
                inputYear.classList.remove("error-input-mostrar");
                errorAnio.classList.remove("error-fecha-mostrar");
            } else {
                console.log("ERROR EN EL AÑO");
                inputYear.classList.add("error-input-mostrar");
                errorAnio.classList.add("error-fecha-mostrar");
            }

            // valido el mes
            if ((parseInt(inputMonth.value) > 0) && (inputMonth.value < 13)){
                /* console.log("entre"); */
                inputMonth.classList.remove("error-input-mostrar");
                errorMes.classList.remove("error-fecha-mostrar");
            } else {
                inputMonth.classList.add("error-input-mostrar");
                errorMes.classList.add("error-fecha-mostrar");
            }

            //valido el dia
            
            if ((parseInt(inputDay.value)>0) && (parseInt(inputDay.value)<32)){
                inputDay.classList.remove("error-input-mostrar");
                errorDia.classList.remove("error-fecha-mostrar");
                console.log("Entre 1");
                console.log(fechaAgregar);

                if ((inputMonth.classList.length != 3) && (inputYear.classList.length != 3) && (parseInt(inputMonth.value) != (fechaAgregar.getMonth()+1))){
                    inputDay.classList.add("error-input-mostrar");
                    errorDia.classList.add("error-fecha-mostrar");
                    console.log("Entre 2");
                }
                    

            } else {
                console.log("alguno tiene error");
                inputDay.classList.add("error-input-mostrar");
                errorDia.classList.add("error-fecha-mostrar");
            }
        }
    }
})

