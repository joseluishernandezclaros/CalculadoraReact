import React, { useState } from "react";

function Calculadora() {
  const [numero, setNumero] = useState("");
  const [operacion, setOperacion] = useState("");
  const [calcu, setcalcu] = useState([]);

  const click = (valor) => {
    setNumero(numero + valor);
  };

  console.log(numero);

  const suma = (sumar) => {
    setcalcu([...calcu, numero]);
    setNumero("");
  };
  console.log(calcu);

  const simbolos = () => {
    setOperacion(calcu + "+");
  };

  return (
    <div className="Contenedor">
      <div className="inputs12">
        <input className="inp2"></input>
        {/* <br></br> */}
        <input
          autoFocus
          value={numero}
          onChange={() => {
            click;
          }}
          className="inp1"
        ></input>
      </div>
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <button className="nClear">Clear</button>
            </td>
            <td>
              <button className="nPorciento">%</button>
            </td>
            <td>
              <button className="nDividir">/</button>
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
              <button className="nMultiplicar">*</button>
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
              <button className="nRestar">-</button>
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
                  suma("sumar");
                  simbolos();
                }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="n0">0</button>
            </td>
            <td>
              <button className="nPunto">.</button>
            </td>
            <td>
              <button className="nDel">⌫</button>
            </td>
            <td>
              <form>
                <button className="nIgual" onChange={() => {}}>
                  =
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
      <form></form>
    </div>
  );
}

export default Calculadora;
