import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefCard from "./ChefCard";

const ChefRecom = () => {
  const [chefRecom, setChefRecom] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefRecom = data.filter((item) => item.category === "salad");
        setChefRecom(chefRecom);
      });
  }, []);

  return (
    <section className="my-16">
      <SectionTitle subTitle={"Best From Chefs"} title={"Chef Recommends"} />
      <div className="grid md:grid-cols-3 gap-4">
        {chefRecom.slice(6, 9).map((item) => (
          <ChefCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecom;
