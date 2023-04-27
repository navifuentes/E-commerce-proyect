import "./App.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App bg-pink-300 dark:bg-black dark:text-white">
      <Navbar />
      <div className="h-screen"> MAIN</div>
      <footer className="h-1/4">FOOTER</footer>
    </div>
  );
}

export default App;
