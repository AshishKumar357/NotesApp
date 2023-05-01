import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "90vh" }}>This is the body</main>
      <Footer />
    </>
  );
}

export default App;
