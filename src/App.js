import { useState, useEffect } from "react";

import Header from "./components/Header";
import History from "./components/History";
import Climb from "./components/Climb";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";
import { data } from "./utils/data";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let content;
  if (isMobile) {
    content = data.map((item) => {
      return <Accordion key={item.id} {...item} />;
    });
  } else {
    content = <Tabs tabs={data} />;
  }

  return (
    <div>
      <Header />
      <History />
      <Climb />
      <div className="mountains">{content}</div>
      <Footer />
    </div>
  );
}

export default App;
