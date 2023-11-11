import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featurdImg from "../../../assets/home/featured.jpg"
import "./Featured.css"


const FeaturedItems = () => {
  return (
    <section className="featured-sec  bg-fixed z-10 ">
      <div className="pt-20 bg-slate-800 bg-opacity-50">
      <SectionTitle subTitle="Check it out" title="Featured Items" />

      <div className="md:flex justify-center items-center pb-28 px-36 ">
        <div>
          <img src={featurdImg} alt="" />
        </div>
        <div className="md:ml-12 text-white ">
          <p>March 20, 2023</p>
          <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, et.
            Delectus, voluptates adipisci quo temporibus quas voluptatum ipsum
            quam, repellendus distinctio alias necessitatibus. Quis sunt illum
            illo similique dicta et quibusdam animi, unde aliquid blanditiis
            exercitationem, consequatur non aperiam quod labore nihil vel
            dignissimos voluptates cupiditate facere, aut qui in.
          </p>
          <button className="btn btn-outline border-0  border-b-4">Order Now</button>

        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
