let listaNombreGastos = [];
let listaValoresGastos = [];
let listaDescripcion = [];

// Esta funcion se invoca 
function clickBoton(){
     
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcion = document.getElementById('descripcion').value;
    
    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcion);

    listaNombreGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcion.push(descripcion);

    console.log(listaNombreGastos);
    console.log(listaValoresGastos);
    console.log(listaDescripcion);
    //alert('click del ususario');
    actualizarListaGastos();
}  
//
function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElemetos = document.getElementById('totalGastos');
    let htmlLista = "";
    let totalGastos= 0;
    listaNombreGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcion = listaDescripcion[posicion];

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcion}
                      <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                      <button onclick="editar(${posicion});">Editar</button>
                      </li>`;//"<li>" + elemento +"</li>";
        
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);  
        //console.log(totalGastos);
        if(totalGastos > 150){
            alert('Gasto mayor a 150$ dolares')
        }
        //console.log(elemento);
        //console.log(posicion);
    });
    //console.log(htmlLista); 

    listaElementos.innerHTML = htmlLista;
    totalElemetos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}
    
function limpiar(){
        document.getElementById('nombreGasto').value ="";
        document.getElementById('valorGasto').value="";
        document.getElementById('descripcion').value="";
}

function eliminarGasto(posicion){
        listaNombreGastos.splice(posicion,1);
        listaValoresGastos.splice(posicion,1);
        listaDescripcion.splice(posicion,1);
        actualizarListaGastos();
 }

 function editar(posicion){
    const nombre = document.getElementById('nombreGasto');
    nombre.value = listaNombreGastos[posicion];
    const gasto = document.getElementById('valorGasto');
    gasto.value = listaValoresGastos[posicion];
    const descripcion = document.getElementById('descripcion');
    descripcion.value = listaDescripcion[posicion];

    document.getElementById('botonFormulario').innerHTML = "Guardar cambios";
    document.getElementById('botonFormulario').onclick = function(){
        guardarCambios(posicion);
    }
 }
 function guardarCambios(posicion){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcion = document.getElementById('descripcion').value;

    listaNombreGastos[posicion] = nombreGasto;
    listaValoresGastos[posicion] = valorGasto;
    listaDescripcion[posicion] = descripcion;
    
    actualizarListaGastos();
    limpiar();
    document.getElementById('botonFormulario').innerHTML = "Agregar Gasto";
    document.getElementById('botonFormulario').onclick = function(){
        clickBoton();
    }
 }