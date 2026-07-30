import Hero from "../../components/home/Hero";
import FeaturedCareers from "../../components/home/FeaturedCareers";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import CareerCategories from "../../components/home/CareerCategories";
import Statistics from "../../components/home/Statistics";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCareers />
       <WhyChooseUs />
       <CareerCategories />
        <Statistics />
        <Testimonials />
        <FAQ />
    </>
  );
};

export default Home;