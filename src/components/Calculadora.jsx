import React, { useState } from "react";

function Calculadora() {
  const [numero, setNumero] = useState("");
  const [calcu, setcalcu] = useState(0);
  const [calcu2, setcalcu2] = useState("1");
  const [opera, setOpera] = useState("");
  const [texto, setTexto] = useState("Calculadora");

  const click = (valor) => {
    setNumero(numero + valor);
    // setNumero(valor.target.value);
  };

  const textoSpan = (a) => {
    setTexto(a);
  };

  const suma = () => {
    textoSpan("Suma Activa");
    // const sumatoria = parseInt(numero);
    // const res = parseInt(calcu) + sumatoria;
    // setcalcu(res.toString());
    // setcalcu(calcu + calcu);
    // setcalcu((prevCalcu) =>
    //   prevCalcu.length > 0 ? prevCalcu + "+" + numero : numero
    // );
    // setNumero("");
    // preventDefault();
    if (numero !== "") {
      const res = parseInt(calcu) + parseInt(numero);
      setcalcu(res.toString());
      setOpera(`${calcu} + ${numero} = ${res}`);
      setNumero("");
    }
  };

  const resta = () => {
    textoSpan("Resta Activa");
    if (numero !== "") {
      const diferencia = parseInt(numero) - parseInt(calcu);
      setcalcu(diferencia.toString());
      setOpera(`${calcu} - ${numero} = ${diferencia * -1}`);
      setNumero("");
    }
  };

  const multiplicacion = () => {
    textoSpan("Multiplicación Activa");
    if (numero !== "") {
      const resultado = parseInt(numero) * parseInt(calcu2);
      setcalcu2(resultado.toString());
      if (calcu2 === "1") {
        setOpera(`${resultado}`);
      } else {
        setOpera(`${calcu2} * ${numero} = ${resultado}`);
      }

      setNumero("");
    }
  };

  const division = () => {
    textoSpan("Division Activa");
    if (numero !== "") {
      const divires = parseInt(numero) / parseInt(calcu2);
      setcalcu2(divires.toString());
      if (calcu2 === "1") {
        setOpera(`${numero}`);
      } else {
        setOpera(`${calcu2} / ${numero} = ${divires}`);
      }

      setNumero("");
    }
  };

  const limpiar = () => {
    textoSpan("Calculadora");
    setNumero("");
    setcalcu(0);
    setcalcu2("1");
    setOpera("");
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
              <button className="nPorciento">%</button>
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
            <td>
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
              <button className="nPunto">.</button>
            </td>
            <td>
              <button className="nDel">⌫</button>
            </td>
            <td>
              {/* <form> */}
              <button
                className="nIgual"
                onClick={() => {
                  suma();
                  // resta();
                }}
              >
                =
              </button>
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
