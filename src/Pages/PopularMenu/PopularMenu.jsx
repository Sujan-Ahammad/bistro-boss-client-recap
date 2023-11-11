import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Button from "../../Components/Button/Button";

const PopularMenu = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularCategory = data.filter(
          (item) => item.category === "popular"
        );
        setPopularItems(popularCategory);
      });
  }, []);

  return (
    <section className="mb-10">
      <SectionTitle subTitle={"Popular Menu"} title={"form Our Menu"} />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 space-y-4 mb-10">
        {popularItems.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <Button title={"View Full  Menu "} />
    </section>
  );
};

export default PopularMenu;
