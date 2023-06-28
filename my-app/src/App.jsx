import "./App.css";
import Rutas from "./routes/Rutas";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "./services/firebase.config";

function App() {
  return (
    <div className="App bg-pink-300 dark:bg-black dark:text-white">
      <Rutas />
    </div>
  );
}

export default App;
