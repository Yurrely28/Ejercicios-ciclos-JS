/* console.log("PUNTO 1")
let n = parseInt(prompt("Ingrese la cantidad de nuemros que desea sumar"))
let sum = 0
let cont=1
while(cont<=n){
    num=parseInt(prompt("Ingrese el numero a sumar"))
    if(num>0){
        sum+=num
    }else{
        sum=sum
    }
    cont++
}
alert(`La suma de los numeros mayores que 0 es ${sum}`) */

/* console.log("PUNTO 2")
let listo=true
while(listo==true){
    num=Math.floor(Math.random()*(10+0+1)+0)
    console.log(num)
    if(num==0){
        listo=false
    }
} */

/* console.log("PUNTO 3")
let cont=1
while(cont<=20){
    num=Math.floor(Math.random()*(1000+1+1)+1)
    console.log(num)
    cont++
} */

/* console.log("PUNTO 4")
let num = parseInt(prompt("Ingrese un numero entero positivo"))
if(num>0){
    for (i=1;i<=num;i++){
        if(i%2 !=0){
            console.log(i)
        }
    }
}else{
    alert("Numero incorreto")
} */

/* console.log("PUNTO 5")
let edad
let peso
let contn=0
let contj=0
let conta=0
let contv=0
let sumn=0 
let sumj=0
let suma=0
let sumv=0
for (i=1;i<=20;i++){
    edad = parseInt(prompt("Ingrese la edad"))
    console.log("edad",edad)
    peso = parseInt(prompt("ingresar el peso"))
    console.log("peso",peso)
    if(edad>=60){
        sumv+=peso
        contv++
    }else if(edad>=30){
        suma+=peso
        conta++
    }else if(edad>=13){
        sumj+=peso
        contj++
    }else if(edad>=0){
        sumn+=peso
        contn++
    }
}
if (contn != 0){
    console.log(`Promedio peso niños ${sumn/contn}`)
}
if (contj != 0){
    console.log(`Promedio peso Jovenes ${sumj/contj}`)
}
if (conta != 0){
    console.log(`Promedio peso adultos ${suma/conta}`)
}
if (contv != 0){
    console.log(`Promedio peso Viejos ${sumv/contv}`)
} */

/* console.log("PUNTO 6")
for (i=0;i<5;i++){
    for (j=0;j<4;j++){
        if (j<3){
            document.write(`${1}.${i+1}.${j+1}-`)
        }else{
            document.write(`${1}.${i+1}.${j+1} <br/>`)
        }
    }
}  */

/* console.log("PUNTO 7")
let tipo = parseInt(prompt("Que tipo de animal desea muestrear\n1. Elefantes\n2.Jirafas\n3.Chimpancés"))
n=0
if (tipo >= 1 && tipo <= 3){
    switch (tipo){
        case 1:
            n = 20
            break;
        case 2:
            n = 15
            break;
        default:
            n= 40
    }
}else{
    alert("Ingreso un numero incorrecto")
}
let cont1=0
let cont2=0
let cont3=0
for (i=1;i<=n;i++){
    edad = parseInt(prompt("Ingrese la edad: "))
    if (edad >= 0 && edad <= 1){
        cont1+=1
    }else if (edad > 1 && edad < 3){
        cont2+=1
    }else if (edad >= 3){
        cont3+=1
    }
}
console.log(`Hay ${100*cont1/n}% entre las edades de 0 a 1 año`)
console.log(`Hay ${100*cont2/n}% entre las edades de mas de 1 y menos de 3 años`)
console.log(`Hay ${100*cont3/n}% entre las edades de 3 años o más`) */

/* console.log("PUNTO 8")
let n=parseInt(prompt("ingrese la cantidad de vendedores"))
let base=parseFloat(prompt("ingrese el sueldo base"))
for (i=1;i<=n;i++){
    let sum=0
    for (j=1;j<=3;j++){
        ventas=parseFloat(prompt(`Ingrese la ${j} venta del vendedor ${i}`))
        sum+=ventas
    }
    sueldo = base + sum*0.1
    document.write(`Vendedor ${i} comision por semana ${sum*0.1} total ${sueldo} <br/>`)
} */

/* console.log("PUNTO 9")
let salario = 950000
let comision = 170000
let n= parseInt(prompt("Cuantos autos vendio"))
let cont=1
let sum =0
while(cont<=n){
    valor=parseFloat(prompt(`Ingrese el valor de la ${cont} venta`))
    sum+=valor
    cont++
}
total = salario + n*comision + sum*0.05
alert(`Salario total ${total}`) */

/* console.log("PUNTO 10")

let nombre = prompt("Digite el nombre del estudiante: ")
let sum=0
let sum2=0

for (i=1;i<=2;i++){
    nota40= parseFloat(prompt(`Digite la ${i} nota del 40%`))
    sum+=nota40
}

for (i=1;i<=3;i++){
    nota60= parseFloat(prompt(`Digite la ${i} nota del 60%`))
    sum2+=nota60
}
defi = (sum/2)*0.4 + (sum2/3)*0.6

alert(`La nota final de ${nombre} es ${defi}`) */