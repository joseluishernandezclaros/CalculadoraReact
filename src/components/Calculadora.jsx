import React, { useState, useEffect } from "react";

function Calculadora() {
  const [numero, setNumero] = useState("");
  const [calcu, setcalcu] = useState(0);
  const [opera, setOpera] = useState("");
  const [texto, setTexto] = useState("Calculadora");

  const click = (num) => {
    //funcion que se activa al darle click en un boton
    setNumero(numero + num); //al realizar click asignamos al state numero el valor de num que se ingreso mediante los botones
  };

  const limpiar = () => {
    //funcion que pone todos los states por defecto
    setTexto("Calculadora"); //poner el span con el texto calculadora
    setNumero(""); //poner el state como string
    setcalcu(0); //valor del state en 0
    setOpera(""); //valor de opera se vuelve string vacio
  };

  const puntoClick = () => {
    //funcion para poner un punto luego de un numero para poder crear decimales
    setTexto("Calculadora"); //span ahora se llama calculadora
    if (numero === "") {
      //si el numero es un string vacio se agrega el punto pero con un 0 antes del punto
      setNumero("0.");
    } else if (numero.indexOf(".") === -1) {
      //medianet indexof se verifica si ya existe un punto en el state numero, si existe no hace nada pero si no existe cambia el state de numero agregandole el . a la parte derecha del numero
      setNumero(numero + ".");
    }
  };

  const suma = () => {
    setTexto("Suma Activa"); //cambiar el texto del span por suma activa
    if (numero !== "" && calcu !== 0) {
      //se verifica si el numero actual No esta vacio y si calcu tiene algun valor almacenado previamente si se cumplen las 2 cosas se hace la suma
      const resultado = parseFloat(calcu) + parseFloat(numero); // se suma el valor de calcu y de numero en la constante resultado sin olvidar parsear a float los 2 valores para que no se agreguen strings a la operacion y se acepten numeros decimales de esta menera
      setcalcu(resultado.toString()); //ahora calcu vale el resultado convertido en string
      setOpera(`${calcu} + ${numero} = ${resultado}`); //opera muestra el valor de calcu + numero = resultado en el input 2
      setNumero(""); //el state de numero vuelve a ser un string vacio
    } else {
      //si no se cumple ninguna de las 2 concidicones del if se hace lo siguiete
      setcalcu(parseFloat(numero).toString()); //el valor de calcu ahora sera el valor de numero convertido a string
      setOpera(`${numero} + `); //el opera que se muestra en el input 2 solo mostrara el valor de numero junto al simbolo "+"
      setNumero(""); //valor de numero se vuelve vacio
    }
  };

  const resta = () => {
    setTexto("Resta Activa"); // Cambia el texto del span por "Resta Activa"
    if (numero !== "" && calcu !== 0) {
      // Verifica si el número actual no está vacío y si calcu tiene algún valor almacenado previamente, si se cumplen las dos condiciones, se realiza la resta
      const resultado = parseFloat(calcu) - parseFloat(numero); // Resta el valor de calcu y de numero en la constante resultado sin olvidar parsear a float los 2 valores para que no se agreguen strings a la operación y se acepten números decimales de esta manera
      setcalcu(resultado.toString()); // Ahora calcu vale el resultado convertido en string
      setOpera(`${calcu} - ${numero} = ${resultado}`); // Opera muestra el valor de calcu - numero = resultado en el input 2
      setNumero(""); // El state de numero vuelve a ser un string vacío
    } else {
      // Si no se cumple ninguna de las 2 condiciones del if se hace lo siguiente
      setcalcu(parseFloat(numero).toString()); // El valor de calcu ahora será el valor de numero convertido a string
      setOpera(`${numero} - `); // El opera que se muestra en el input 2 solo mostrará el valor de numero junto al símbolo "-"
      setNumero(""); // El valor de numero se vuelve vacío
    }
  };
  const multiplicacion = () => {
    setTexto("Multiplicación Activa"); //cambia el texto del span por "Multiplicación Activa"
    if (numero !== "" && calcu !== 0) {
      // si el valor del state numero no está vacío y calcu tiene un valor diferente de 0, se realiza la multiplicación
      const resultado = parseFloat(calcu) * parseFloat(numero); // se realiza la multiplicación entre calcu y numero
      setcalcu(resultado.toString()); // el valor de calcu se actualiza con el resultado de la multiplicación
      setOpera(`${calcu} * ${numero} = ${resultado}`); // se actualiza el valor del input 2 para mostrar la operación y el resultado
      setNumero(""); // el valor de numero se vuelve vacío para esperar un nuevo número
    } else {
      // si el valor del state numero está vacío o calcu tiene un valor igual a 0, se guarda el valor de numero en calcu y se muestra solo el número en el input 2
      setcalcu(parseFloat(numero).toString());
      setOpera(`${numero} * `);
      setNumero(""); // el valor de numero se vuelve vacío para esperar un nuevo número
    }
  };

  //Función "division"
  //Cambia el texto del span a "División Activa"
  const division = () => {
    setTexto("División Activa");
    //Verifica si el valor de "numero" no está vacío y si el valor de "calcu" es diferente de cero
    if (numero !== "" && calcu !== 0) {
      //Realiza la operación de dividir el valor de "calcu" entre el valor de "numero" y lo guarda en la constante "resultado"
      const resultado = parseFloat(calcu) / parseFloat(numero);
      //El valor de "calcu" se actualiza con el resultado de la división convertido a string
      setcalcu(resultado.toString());
      //Muestra la operación realizada en el input 2, utilizando los valores de "calcu", "numero" y "resultado"
      setOpera(`${calcu} / ${numero} = ${resultado}`);
      //El valor de "numero" se vuelve un string vacío para que el usuario pueda ingresar un nuevo número
      setNumero("");
    } else {
      //Si el valor de "numero" está vacío o el valor de "calcu" es igual a cero, se actualiza el valor de "calcu" con el valor de "numero" convertido a string
      setcalcu(parseFloat(numero).toString());
      //Muestra la operación en el input 2, utilizando solamente el valor de "numero" y el símbolo de división
      setOpera(`${numero} / `);
      //El valor de "numero" se vuelve un string vacío para que el usuario pueda ingresar un nuevo número
      setNumero("");
    }
  };

  //Función "porcientoClick"
  //Cambia el texto del span a "Porcentaje Activo"
  const porcientoClick = () => {
    setTexto("Porcentaje Activo");
    //Verifica si el valor de "numero" no está vacío y si el valor de "calcu" es diferente de cero
    if (numero !== "" && calcu !== 0) {
      //Calcula el porcentaje del valor de "calcu" respecto al valor de "numero" y lo guarda en la constante "resultado"
      const resultado = (parseFloat(calcu) * parseFloat(numero)) / 100;
      //El valor de "calcu" se actualiza con el resultado del porcentaje convertido a string
      setcalcu(resultado.toString());
      //Muestra la operación realizada en el input 2, utilizando los valores de "calcu", "numero" y "resultado"
      setOpera(`${calcu} % ${numero} = ${resultado}`);
      //El valor de "numero" se vuelve un string vacío para que el usuario pueda ingresar un nuevo número
      setNumero("");
    } else {
      //Si el valor de "numero" está vacío o el valor de "calcu" es igual a cero, se actualiza el valor de "calcu" con el valor de "numero" convertido a string
      setcalcu(parseFloat(numero).toString());
      //Muestra la operación en el input 2, utilizando solamente el valor de "numero" y el símbolo de porcentaje
      setOpera(`${numero} % `);
      //El valor de "numero" se vuelve un string vacío para que el usuario pueda ingresar un nuevo número
      setNumero("");
    }
  };

  const borrar = () => {
    setTexto("Borrar Activo"); //cambiar span por el texto Borrar activo
    if (numero.length === 1) {
      //si el tamaño de numero es de 1 cambia el state numero a un string vacion
      setNumero("");
    } else {
      // si no lo se modificar el numero para que contenga todos los valores que estan en numero excepto el ultimo numero ingresado
      setNumero(numero.slice(0, -1));
    }
  };

  return (
    <div className="Contenedor">
      <span className="spanCambiante">{texto}</span>
      <div className="inputs12">
        <input
          autoFocus
          value={numero}
          // onChange={() => {
          //   click;
          // }}
          onChange={() => {
            click();
          }}
          className="inp1"
          // type="number"
        ></input>
        <input
          className="inp2"
          value={opera}
          // onChange={() => {
          //   suma;
          // }}
          readOnly
        ></input>
        {/* <br></br> */}
      </div>
      <table className="tablacontenedora">
        <tbody>
          <tr>
            <td colSpan={2}>
              <button
                className="nClear"
                onClick={() => {
                  limpiar();
                }}
              >
                Clear
              </button>
            </td>
            <td>
              <button
                className="nPorciento"
                onClick={() => {
                  porcientoClick();
                }}
              >
                %
              </button>
            </td>
            <td>
              <button
                className="nDividir"
                onClick={() => {
                  division();
                }}
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="n7"
                onClick={() => {
                  click(7);
                }}
              >
                7
              </button>
            </td>
            <td>
              <button
                className="n8"
                onClick={() => {
                  click(8);
                }}
              >
                8
              </button>
            </td>
            <td>
              <button
                className="n9"
                onClick={() => {
                  click(9);
                }}
              >
                9
              </button>
            </td>
            <td>
              <button
                className="nMultiplicar"
                onClick={() => {
                  multiplicacion();
                }}
              >
                *
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="n4"
                onClick={() => {
                  click(4);
                }}
              >
                4
              </button>
            </td>
            <td>
              <button
                className="n5"
                onClick={() => {
                  click(5);
                }}
              >
                5
              </button>
            </td>
            <td>
              <button
                className="n6"
                onClick={() => {
                  click(6);
                }}
              >
                6
              </button>
            </td>
            <td>
              <button
                className="nRestar"
                onClick={() => {
                  resta();
                }}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="n1"
                onClick={() => {
                  click(1);
                }}
              >
                1
              </button>
            </td>
            <td>
              <button
                className="n2"
                onClick={() => {
                  click(2);
                }}
              >
                2
              </button>
            </td>
            <td>
              <button
                className="n3"
                onClick={() => {
                  click(3);
                }}
              >
                3
              </button>
            </td>
            <td rowSpan={2}>
              <button
                className="nSumar"
                onClick={() => {
                  suma();
                }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="n0"
                onClick={() => {
                  click(0);
                }}
              >
                0
              </button>
            </td>
            <td>
              <button
                className="nPunto"
                onClick={() => {
                  puntoClick();
                }}
              >
                .
              </button>
            </td>
            <td>
              <button
                className="nDel"
                onClick={() => {
                  borrar();
                }}
              >
                ⌫
              </button>
            </td>
            <td>
              {/* <form> */}
              {/* <button
                className="nIgual"
                onClick={() => {
                  resultado();
                }}
              >
                =
              </button> */}
              {/* </form> */}
            </td>
          </tr>
        </tbody>
      </table>
      <form></form>
    </div>
  );
}

export default Calculadora;
