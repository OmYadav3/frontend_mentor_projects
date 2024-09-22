import React from "react";
import Navbar from "./components/Navbar";
import MainNews from "./components/MainNews";
import WhatsNew from "./components/WhatsNew";
import ProductCard from "./components/ProductCard";
import card1 from "/card1.jpg";
import card2 from "/card2.jpg";
import card3 from "/card3.jpg";

const App = () => {
  return (
    <div className="cursor-pointer mx-4">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <MainNews />
        <WhatsNew />
      </div>
      <div className="flex max-md:flex-col md:my-6 my-16 justify-center md:gap-4">
        <ProductCard
          url= {card1}
          ProductNumber="01 "
          ProductName="Reviving Retro PCs"
          Productdetails="What happens when old PCs are given modern upgrades?"
        />
        <ProductCard
          url= {card2}
          ProductNumber="02 "
          ProductName="Top 10 Laptops of 2022"
          Productdetails="Our best picks for various needs and budgets."
        />
        <ProductCard
          url= {card3}
          ProductNumber="03 "
          ProductName="The Growth of Gaming"
          Productdetails=" How the pandemic has sparked fresh opportunities."
        />
      </div>
    </div>
  );
};

export default App;
