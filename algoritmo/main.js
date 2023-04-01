//Figura 1, creo la funcion para hallar el cubo
function Cubo (){

    //Llamo el input donde se ingresan los valores
    //con parseInt convierto el dato en un numero entero
    //Con .value llamo el valor del input
    //Le asigno el nombre de aC
    var aC = parseInt(document.getElementById('aCubo').value); 

    //Creo la var Area con la formula del area del Cubo A=6*(aC)^2
    var Area = 6 * (aC**2);

    //Creo la var Volumen con la formula del volumen del Cubo V=aC^3
    var Volumen = aC**3; 

    //imprimo los dos resultados con el mensaje de cada uno
    document.getElementById("resultadoArea").innerHTML = 'Area: ' + Area + ' cm^2, ';
    document.getElementById("demo2").innerHTML = 'Volumen: ' + Volumen + ' cm^3';
    
}

//Figura 2, creo la funcion para hallar el cilindro
function Cilindro(){
    var aCi = parseInt(document.getElementById('R').value);
    var vCi = parseInt(document.getElementById('H').value);

    var AreaCi = (2*3.1416) * aCi * (vCi + aCi);
    var VolumenCi = 3.1416 * (aCi**2) * vCi;

    document.getElementById('areaCilindro').innerHTML = 'Area: ' + AreaCi + ' cm^2';
    document.getElementById('volumenCilindro').innerHTML = 'Volumen: ' + VolumenCi + ' cm^3';

}

//Figura 3, creo la funcion para hallar el Ortoedro
function Ortoedro(){
    var aedro = parseInt(document.getElementById('a-edro').value);
    var bedro = parseInt(document.getElementById('b-edro').value);
    var cedro = parseInt(document.getElementById('c-edro').value);

    var AreaEdro = 2 * ((aedro*bedro) + (aedro*cedro) + (bedro*cedro));
    var VolumenEdro = aedro * bedro * cedro;

    document.getElementById('areaOrtoedro').innerHTML = 'Area: ' + AreaEdro + ' cm^2';
    document.getElementById('volumenOrtoedro').innerHTML = 'Volumen: ' + VolumenEdro + ' cm^3';
}

//Figura 4, creo la funcion para hallar la esfera
function Esfera(){
    var rEsfera = parseInt(document.getElementById('rEs').value);

    var AreaEsf = 4 * 3.1416 * (rEsfera**2);
    var VolumenEsf = (4 * 3.1416 * (rEsfera**3)) / 3;

    document.getElementById('areaEsfera').innerHTML = 'Area: ' + AreaEsf + ' cm^2';
    document.getElementById('volumenEsfera').innerHTML = 'Area: ' + VolumenEsf + ' cm^3';
    
}