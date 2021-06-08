import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/style.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <section className="container">
          <div className="container__navbar">
            <Navbar />
          </div>
          <div className="container__content">
            <Routes />
          </div>
        </section>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
