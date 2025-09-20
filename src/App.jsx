import { useState } from "react";
import { Footer, Sidebar, Header } from "./components";

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <div className="">
        <Sidebar />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
