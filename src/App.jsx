import "./App.css";
import Library from "./containers/Library/Library";
import Explore from "./containers/Explore/Explore";
import BookCard from "./components/BookCard/BookCard";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      My Library
      <SearchBar search_item="Book Name" />
      <SearchBar search_item="ISBN" />
      <Library />
      <Explore />
      <BookCard />
    </div>
  );
}

export default App;
