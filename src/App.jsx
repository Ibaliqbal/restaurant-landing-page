import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Guest from "./components/Guest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OrderContextProvider from "./context/orderContext";
import { dataMenu, dataUser } from "./data/db";
import { useState } from "react";

function App() {
  return (
    <OrderContextProvider>
      <>
        <Navbar/>
        <main>
          <HeroSection />
          <About />
          <Menu
            menus={dataMenu.data.results}
          />
          <Guest users={dataUser.data.results} />
          <Contact />
        </main>
        <Footer />
      </>
    </OrderContextProvider>
  );
}

export default App;
