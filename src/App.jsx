import "./App.css";
import NavBar from "./containers/NavBar/NavBar";
import Library from "./containers/Library/Library";
import Explore from "./containers/Explore/Explore";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      My Library
      <div className="searchbars">
        <SearchBar search_item="Book Name" />
        <SearchBar search_item="ISBN" />
      </div>
      <div className="containers">
        <Library />
        <Explore />
      </div>
    </div>
  );
}

export default App;
