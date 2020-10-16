document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("suma").addEventListener("click", suma);
document.getElementById("resta").addEventListener("click", resta);
document.getElementById("division").addEventListener("click", division);
document.getElementById("multiplicacion").addEventListener("click", multiplicacion);
document.getElementById(".").addEventListener("click", addPunto);
document.getElementById("raiz").addEventListener("click", raiz);
document.getElementById("fact").addEventListener("click", factorial);
document.getElementById("inverso").addEventListener("click", inverso);
document.getElementById("cuadrado").addEventListener("click", cuadrado);
document.getElementById("n").addEventListener("click", dosElevado);
document.getElementById("parentesis").addEventListener("click", parentesis);
document.getElementById("limpiar").addEventListener("click", limpiar);
document.getElementById("cuadrado").addEventListener("click", cuadrado);
document.getElementById("igual").addEventListener("click", showResult);

function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function suma() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("suma").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function resta() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("resta").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function division() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + "/"
}

function multiplicacion() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("multiplicacion").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function addPunto() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + "."
}

function parentesis() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = "(" + actual + ")"
}

function cuadrado() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + ""
}

function cerrarParentesis() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + ")"
}

function multiplicacion() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + "*"
}

function inverso() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = "1/" + actual
}

function factorial() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + "!"
}

function cuadrado() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = actual + "²"
}

function raiz() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = "√" + actual;
}

function dosElevado() {
	let actual = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = "2 " + "⇑" + actual;
}

function limpiar() {
	let actual = document.getElementById('resultado').innerHTML = "";
}

function showResult() {
	let actual = document.getElementById('resultado').innerHTML;

	try {
		let res = eval(actual);
		document.getElementById("resultado").innerHTML = res;
	} catch (error) {

		let fact = actual.indexOf("!");
		let squared = actual.indexOf("²");
		let raiz = actual.indexOf("√");
		let dosElevado = actual.indexOf("⇑");

		if (fact !== -1) {
			let unifiedString = unifyStrings(actual, 0, fact);

			console.log(unifiedString);
			//ciclo del factorial
			let numero = parseInt(unifiedString);
			let total = 1;
			for (i = 1; i <= numero; i++) {
				total = total * i;
			}

			document.getElementById("resultado").innerHTML = total;

		} else if (squared !== -1) {

			let unifiedString = unifyStrings(actual, 0, squared);
			let numero = parseInt(unifiedString);

			document.getElementById("resultado").innerHTML = Math.pow(numero, 2);


		} else if (raiz !== -1) {

			let unifiedString = unifyStrings(actual, raiz + 1, actual.length);

			document.getElementById("resultado").innerHTML = Math.sqrt(parseInt(unifiedString));

		} else if (dosElevado !== -1) {

			let unifiedString = unifyStrings(actual, dosElevado + 1, actual.length);

			console.log(unifiedString);

			document.getElementById("resultado").innerHTML = Math.pow(2, parseInt(unifiedString));

		}
	}

	function unifyStrings(string, start, end) {
		let unifiedNumber = string[start];

		for (let i = start + 1; i < end; i++) {
			unifiedNumber += string[i];
		}
		return unifiedNumber;
	}
}
