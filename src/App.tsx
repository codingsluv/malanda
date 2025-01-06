import Footer from "./component/Footer";
import HeroSection from "./component/page/Hero";
import Navbar from "./component/Navbar";
import Address from "./component/page/Address";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Address />
      <Footer />
    </div>
  );
}