//alert("hola mundo")

var nombre = "Pedro Angel"
var apellidos ="Rivera Herrera"
var edad = "27"

console.log(nombre, apellidos)
console.log(nombre +" "+ apellidos);
console.log("mi edad es:" + edad)

var persona = {
nombre: ["Jose", "perez"],
edad: 150,
saludar: function(){
alert ( "Hola, soy " + this.nombre[0] + " " + this.nombre[1] );    
},

años: function(){
    alert ("tengo " + this.edad + " años");
}
};

console.log (persona.saludar());
console.log (persona.años());

var lista = function(){
var a = (prompt ("nombre"))
var b = (prompt ("apellido"))
var c = parseInt(prompt("edad"))
var dude = {
    nombre: a,
    apellido: b,
    edad: c
}

}

console.log(typeof(dude));

/*
var a = 1
var b = 1

var suma = function() {
    var num1 = a ;
    var num2 = b ;
return (num1 + num2) ;
};

console.log (suma())

var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto","septiembre","octubre","noviembre","diciembre"]

console.log (meses)

for(var i = 0; i < meses.length ; i++)
{console.log(meses[i]);
alert ("meses " + meses[i])}
*/






/*
// Calcular el salario bruto y neto mensual y quincenal de una persona, el salario diario debe ser ingresado por el usuario a traves de promt, los descuentos para calcular el sueldo netos serán sueldo bruto - ISR(30%)  - IMSS(10)

var salariod = 1

var salariod = parseInt(prompt("ingresa el salario por dia en pesos Mexicanos"));
var salariob = (salariod*30);
var salarion = (salariob*.60)

alert ("tu salario bruto mensual es: $" + salariob + " pesos" )
alert ("tu salario neto mensual es: $" + salarion + " pesos" )

alert ("tu salario quincenal bruto es: $" + (salariob/2) + " pesos" )
alert ("tu salario quincenal neto es: $" + (salarion/2) + "pesos")
*/



// "\n" esto es un salto de linea 
/*
// Hacer un programa en JavaScript en donde se le pregunte la edad al usuario y si el usuario tiene 18 años o mas y menos de 29 años, le impriman por consola que ha sido aceptado en el programa de generation, en caso de no ser así mostrar un mensaje indicando que no cumple los requisitos del programa

var edad = 1

var edad =parseInt(prompt("ingresa tu edad"))

if (edad >= 18 && edad <= 29)
alert ("felicidades ya ere miembro de Generation")
else 
alert ("lo sentimos ya esta mos completos" )
*/



/*

//Hacer un codigo que le pida al usuario 2 numeros a traves del prompt, estos numeros los vamos a Sumar, restar multiplicar y dividir. Al final mostrar el resultado.

var a = 1;
var b = 1;

console.log (typeof(a));
console.log (typeof(b));

//sse pide que el usuario ingrese los datos de a & b

var a= parseInt(prompt("ingresa tu primer numero"));
var b= parseInt(prompt("ingresa tu segundo numero"));

// se operan los datos que ingreso el usuario
var suma = (a + b );
var resta = (a - b);
var mult= (a*b);
var div = (a/b);

//se presentan los datos al usuario

alert("la suma de ambos es " + suma)
alert( "la diferencia de ambos es " + resta)
alert("el producto de ambos es " + mult)
alert("el cociente de a con b es " + div)
*/

/*
var numero = 11 ;
var otroNumero = '11';

console.log (typeof(numero));
console.log (typeof(otroNumero));

//se calcula el area del triangulo

var base= parseInt(prompt("escribe la base del triangulo"));
var altura= parseInt(prompt("escribe la altura del triangulo"));
var resultado = (base * altura ) / 2;

alert("el area del triangulo es :" + resultado);
*/


