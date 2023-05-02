import React, { useEffect, useState } from "react";
import { About, HeroSection, Navbar, ProductCard } from "../../../components";
import userOBJ from "../../../Classes";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "Homepage";
    const getData = async () => {
      await userOBJ.get_all_products(1).then((res) => {
        setData(res.payload);
      });
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <div>
        <h1 style={{ textAlign: "center" }}>Available Product</h1>
        <ProductCard products={data} />
      </div>
      <About />
    </div>
  );
};

export default Homepage;
