import { useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  

  const jugadores = [
    {
      name: "leo",
      apellido: "messi",
    },
    {
      name: "diego",
      apellido: "maradona",
    },
    {
      name: "pele",
      apellido: "do nacemento",
    },
  ];

  useEffect(() => {
    setLoading(true);
    const tarea = new Promisse((res, rej) => {
      resolve(jugadores);
    });
    tarea
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, {});

  return (
    <div>
      <h1>{loading ? "Cargando ..." : "Content"}</h1>
    </div>
  );
};

export default Loading;
