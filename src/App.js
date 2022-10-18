import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import components
import { Footer, Header } from "./components";
// import pages
import { Contact, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
