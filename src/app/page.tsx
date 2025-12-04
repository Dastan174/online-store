import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ flex: 1 }}></div>
      <Footer />
    </div>
  );
}
