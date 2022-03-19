function agregarTabla(){
    let nombre=document.querySelector("input[name=nombre]");
    let promedio = calc_promedio();
 
    // mostramos un error si no ha recibido el nombre
    if(!nombre.value)
    {
        nombre.classList.add("error");
        return;
    }
    nombre.classList.remove("error");
    if(promedio == 0){
        return 0
    }

    // añadimos el alumno a la tabla crando el tr, td's y el botón para eliminarlo
    let tr=document.createElement("tr");

    let tdNombre=document.createElement("td");
    let txt=document.createTextNode(nombre.value);
    tdNombre.appendChild(txt);
    tdNombre.className="nombre";
 
    let tdNota=document.createElement("td");
    txt=document.createTextNode(promedio);
    tdNota.appendChild(txt);
    tdNota.className="right";
 
    let tdRemove=document.createElement("td");
    let buttonRemove=document.createElement("input")
    buttonRemove.type="button";
    buttonRemove.value="Eliminar";
    buttonRemove.onclick=function () {
        // elimina la columna
        this.parentElement.parentElement.remove();


        // Si no hay ningun alumno, escondemos la tabla
        if(document.getElementById("listado").querySelector("tbody").querySelectorAll("tr").length==0)
        {
            document.getElementById("listado").classList.add("hide");
            document.getElementById("calculos").classList.add("hide");
        }
        calculos();
    };
    tdRemove.appendChild(buttonRemove);
 
    tr.appendChild(tdNombre);
    tr.appendChild(tdNota);
    tr.appendChild(tdRemove);
 
    let tbody=document.getElementById("listado").querySelector("tbody").appendChild(tr);
 
    // eliminamos la clase que tiene oculta la tabla cando no hay ningun alumno
    document.getElementById("listado").classList.remove("hide");
    document.getElementById("calculos").classList.remove("hide");
 
    //limpiamos los valores del input
    document.getElementById('nota1').value = ""
    document.getElementById('nota2').value = ""
    document.getElementById('nota3').value = ""
    nombre.value="";
    nombre.focus();
 
    // realizamos los calculos
    calculos();
}

/**
 * funcion que realiza los calculos leyendo el contenido de la tabla
 */
function calculos() {
    // Obtenemos un array con los alumnos de la tabla
    let alumnosAgregados=document.getElementById("listado").querySelector("tbody").querySelectorAll("tr");
 
    // guardamos en un array todos los alumnos aprobados, suspendido.
    // promocionados, con mejor nota y con peor nota
    let aprobados=[];
    let suspendidos=[];
    let promocionados=[];
 
    let mejorNotaAlumnos=[];
    let mejorNota=0;
 
    let peorNotaAlumnos=[];
    let peorNota=10;
 
    let mediaNota=0;
 
    // bucle por cada uno de los alumnos
    for (let i=0;i<alumnosAgregados.length;i++)
	{
        let tds=alumnosAgregados[i].getElementsByTagName('td');
 
        // mejor nota
        if(parseFloat(tds[1].innerHTML)>mejorNota) {
            mejorNotaAlumno=[tds[0].innerHTML];
            mejorNota=parseFloat(tds[1].innerHTML);
        }else if(parseFloat(tds[1].innerHTML)==mejorNota){
            mejorNotaAlumno.push(tds[0].innerHTML);
        }
 
        // peor nota
        if(parseFloat(tds[1].innerHTML)<peorNota) {
            peorNotaAlumnos=[tds[0].innerHTML];
            peorNota=parseFloat(tds[1].innerHTML);
        }else if(parseFloat(tds[1].innerHTML)==peorNota){
            peorNotaAlumnos.push(tds[0].innerHTML);
        }
 
        // aprobados y suspendidos
        if(parseFloat(tds[1].innerHTML)>=7) {
            aprobados.push(tds[0].innerHTML);
        }else{
            suspendidos.push(tds[0].innerHTML);
        }
 
        // promocionados
        if(parseFloat(tds[1].innerHTML)>=7) {
            promocionados.push(tds[0].innerHTML);
        }
 
        mediaNota+=parseFloat(tds[1].innerHTML);
    }
 
    // mostramos el resultado
    let result="<div>La mejor nota es de: <span>"+mejorNotaAlumno+" ("+mejorNota+")</span></div>";
    result+="<div>La peor nota es de: <span>"+peorNotaAlumnos+" ("+peorNota+")</span></div>";
    result+="<div>La media es de: <span>"+(mediaNota/alumnosAgregados.length).toFixed(2)+"</span></div>";
    result+="<div>Los aprobados son: <span>"+aprobados+"</span></div>";
    result+="<div>Los suspendidos son: <span>"+suspendidos+"</span></div>";
    result+="<div>Los promocionados son: <span>"+promocionados+"</span></div>";
    result+="<div>El promedio de aprobados es: <span>"+(aprobados.length*100/alumnosAgregados.length).toFixed(2)+"%</span></div>";
    result+="<div>El promedio de promocionados es: <span>"+(promocionados.length*100/alumnosAgregados.length).toFixed(2)+"%</span></div>";
 
    document.getElementById("calculos").innerHTML=result;
 
}

function calc_promedio(){
	let n1 = parseInt(document.getElementById("nota1").value);
	let n2 = parseInt(document.getElementById("nota2").value);
	let n3 = parseInt(document.getElementById("nota3").value);
	let p = (n1+n2+n3)/3;
    // mostramos un error si no ha recibido una nota

    if(n1 > 10 || n1 < 0 || isNaN(n1)){
        alert("Nota 1 invalida")
        return 0
    }
    if(n2 > 10 || n2 < 0 || isNaN(n2)){
        alert("Nota 2 invalida")
        return 0
    }
    if(n3 > 10 || n3 < 0 || isNaN(n3)){
        alert("Nota 3 invalida")
        return 0
    }
	return p;
}
