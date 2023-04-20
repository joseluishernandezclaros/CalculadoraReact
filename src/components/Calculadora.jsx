import React, { useState, useEffect } from "react";

function Calculadora() {
  const [numero, setNumero] = useState("");
  const [calcu, setcalcu] = useState(0);
  const [opera, setOpera] = useState("");
  const [texto, setTexto] = useState("Calculadora");

  const click = (num) => {
    setNumero(numero + num);
  };

  const limpiar = () => {
    setTexto("Calculadora");
    setNumero("");
    setcalcu(0);
    setOpera("");
  };

  const puntoClick = () => {
    setTexto("Calculadora");
    if (numero === "") {
      setNumero("0.");
    } else if (numero.indexOf(".") === -1) {
      setNumero(numero + ".");
    }
  };

  const suma = () => {
    setTexto("Suma Activa");
    if (numero !== "" && calcu !== 0) {
      const resultado = parseFloat(calcu) + parseFloat(numero);
      setcalcu(resultado.toString());
      setOpera(`${calcu} + ${numero} = ${resultado}`);
      setNumero("");
    } else {
      setcalcu(parseFloat(numero).toString());
      setOpera(`${numero} + `);
      setNumero("");
    }
  };

  const resta = () => {
    setTexto("Resta Activa");
    if (numero !== "" && calcu !== 0) {
      const resultado = parseFloat(calcu) - parseFloat(numero);
      setcalcu(resultado.toString());
      setOpera(`${calcu} - ${numero} = ${resultado}`);
      setNumero("");
    } else {
      setcalcu(parseFloat(numero).toString());
      setOpera(`${numero} - `);
      setNumero("");
    }
  };

  const multiplicacion = () => {
    setTexto("Multiplicación Activa");
    if (numero !== "" && calcu !== 0) {
      const resultado = parseFloat(calcu) * parseFloat(numero);
      setcalcu(resultado.toString());
      setOpera(`${calcu} * ${numero} = ${resultado}`);
      setNumero("");
    } else {
      setcalcu(parseFloat(numero).toString());
      setOpera(`${numero} * `);
      setNumero("");
    }
  };

  const division = () => {
    setTexto("División Activa");
    if (numero !== "" && calcu !== 0) {
      const resultado = parseFloat(calcu) / parseFloat(numero);
      setcalcu(resultado.toString());
      setOpera(`${calcu} / ${numero} = ${resultado}`);
      setNumero("");
    } else {
      setcalcu(parseFloat(numero).toString());
      setOpera(`${numero} / `);
      setNumero("");
    }
  };

  const porcientoClick = () => {
    setTexto("Porcentaje Activo");
    if (numero !== "" && calcu !== 0) {
      const resultado = (parseFloat(calcu) * parseFloat(numero)) / 100;
      setcalcu(resultado.toString());
      setOpera(`${calcu} % ${numero} = ${resultado}`);
      setNumero("");
    } else {
      setcalcu(parseFloat(numero).toString());
      setOpera(`${numero} % `);
      setNumero("");
    }
  };

  const borrar = () => {
    setTexto("Borrar Activo");
    if (numero.length === 1) {
      setNumero("");
    } else {
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
