import ProductForm from "../entities/productForm/ui/ProductForm";
import AboutUs from "../widgets/aboutUs/ui/AboutUs";
import CatalogSection from "../widgets/catalog/ui/CatalogSection";
import Footer from "../widgets/footer/ui/Footer";
import Header from "../widgets/header/ui/Header";
import Hero from "../widgets/hero/ui/Hero";
import OurClients from "../widgets/ourClients/ui/OurClients";
import QuestionsSection from "../widgets/questionsSection/ui/QuestionsSection";
import { TestSection } from "../widgets/testSection/ui/TestSection";

const page = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Hero />
        <AboutUs />
        <TestSection />
        <CatalogSection />
        <QuestionsSection />
        <OurClients />
      </div>
      <Footer />
      <ProductForm />
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
};

export default page;
