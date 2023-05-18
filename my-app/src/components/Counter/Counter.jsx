import { useState, useEffect, useRef } from "react";

const Counter = (props) => {
  const { initialValue = 0 } = props;

  const [numero, setNumero] = useState(initialValue || 0);
  const [nombre, setNombre] = useState("");
  const [limitado, setLimitado] = useState(false);

  const tittleDivRef = useRef("");

  const handleTittleAdd = () => {
    tittleDivRef.current.innerHTML = "Nuevo Titulo";
  };

  useEffect(() => {
    if (numero >= 10) {
      setLimitado(true);
    }

    return () => {
      setLimitado(false);
    };
  }, [numero]);

  //eventos onclick
  const sumar = () => {
    setNumero(numero + 1);
  };
  const restar = () => {
    setNumero(numero - 1);
  };
  const reset = () => {
    setNumero(0);
  };
  return (
    <div
      className={`${
        limitado ? `bg-red-500` : ``
      } flex items-center justify-around`}
    >
      <div ref={tittleDivRef}> </div>
      <button onClick={handleTittleAdd}>Agregar un titulo</button>
      <h1 className="text-center">{numero}</h1>
      <div>
        <button onClick={restar}>Restar</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button disabled={limitado} onClick={sumar}>
          Sumar
        </button>
      </div>
    </div>
  );
};

export default Counter;
