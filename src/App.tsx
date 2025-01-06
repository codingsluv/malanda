import Footer from "./component/Footer";
import HeroSection from "./component/page/Hero";
import Navbar from "./component/Navbar";
import Address from "./component/page/Address";
import About from "./component/page/About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Address />
      <Footer />
    </div>
  );
}