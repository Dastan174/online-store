import AboutUs from "../widgets/aboutUs/ui/AboutUs";
import CatalogSection from "../widgets/catalog/ui/CatalogSection";
import { Footer } from "../widgets/footer";
import { Header } from "../widgets/header";
import Hero from "../widgets/hero/ui/Hero";
import Orders from "../widgets/orders/ui/Orders";
import OurClients from "../widgets/ourClients/ui/OurClients";
import QuestionsSection from "../widgets/questionsSection/ui/QuestionsSection";
import { TestSection } from "../widgets/testSection/ui/TestSection";

export default function Home() {
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
      <Orders/>
    </div>
  );
}
