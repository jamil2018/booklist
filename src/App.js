import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContext";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
};

export default App;
