import "./App.css";
import axios from "axios";

function App() {
  async function getGames() {
    const API = `http://localhost:8080/games`;
    const res = await axios.get(API);
  }

  return (
    <>
      <form onSubmit={getGames}>
        <button>Get Games!</button>
      </form>
    </>
  );
}

export default App;
