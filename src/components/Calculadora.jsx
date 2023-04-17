import React, { useState } from "react";

function Calculadora() {
  const [numero, setNumero] = useState("");
  const [calcu, setcalcu] = useState(0);
  const [opera, setOpera] = useState("");

  const click = (valor) => {
    setNumero(numero + valor);
    // setNumero(valor.target.value);
  };

  const suma = () => {
    // const sumatoria = parseInt(numero);
    // const res = parseInt(calcu) + sumatoria;
    // setcalcu(res.toString());
    // setcalcu(calcu + calcu);
    // setcalcu((prevCalcu) =>
    //   prevCalcu.length > 0 ? prevCalcu + "+" + numero : numero
    // );
    // setNumero("");

    if (numero !== "") {
      const sumatoria = parseInt(numero);
      const res = parseInt(calcu) + sumatoria;
      setcalcu(res.toString());
      setOpera(calcu + "+" + sumatoria + "=" + res);
      setNumero("");
    }
  };

  const limpiar = (clear) => {
    setNumero("");
    setcalcu("");
  };

  return (
    <div className="Contenedor">
      <div className="inputs12">
        <input
          autoFocus
          value={numero}
          // onChange={() => {
          //   click;
          // }}
          onChange={() => {
            click;
          }}
          className="inp1"
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
                  limpiar("clear");
                }}
              >
                Clear
              </button>
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
