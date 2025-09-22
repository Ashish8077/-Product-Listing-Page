import { useState } from "react";
import { Footer, Sidebar, Header, ProductSection } from "./components";

function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <div className="font-poppins">
      <Header />
      <div className="lg:flex  p-5">
        <Sidebar
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <ProductSection selectedColor={selectedColor} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
