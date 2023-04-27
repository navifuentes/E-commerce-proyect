import "./App.css";
import Navbar from "./Navbar/Navbar";
import ItemListCointainer from "./ItemListContainer/ItemListCointainer";

function App() {
  return (
    <div className="App bg-pink-300 dark:bg-black dark:text-white">
      <Navbar />
      <ItemListCointainer greeting={"Bienvenido Coder"} />
    </div>
  );
}

export default App;
