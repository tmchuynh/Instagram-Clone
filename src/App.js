import "./styles/App.scss";
import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";

/**
 * The App function returns a div with a Navigation component, a main element with a div with a class
 * of container, a Cards component, and a Sidebar component
 * @returns The Navigation component, the Cards component, and the Sidebar component.
 */
function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;