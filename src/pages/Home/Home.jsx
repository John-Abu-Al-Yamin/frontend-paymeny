import { useNavigate } from "react-router-dom";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import CountriesSection from "../../components/Home/CountriesSection/CountriesSection";
import ExchangeRatesSection from "../../components/Home/ExchangeRatesSection/ExchangeRatesSection";
import WhyMahfaza from "../../components/Home/WhyMahfaza/WhyMahfaza";
import Footer from "../../components/Home/Footer";
const Home = () => {

  return (
    <div className="">
      <HeroSection/>
      <AboutUs  />
      <CountriesSection />
      <ExchangeRatesSection/>
      <WhyMahfaza/>
      <Footer/>
    </div>
  );
};

export default Home;
