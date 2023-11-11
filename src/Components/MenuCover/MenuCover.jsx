import { Parallax } from 'react-parallax';


const MenuCover = ({ img, title,subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[550px]">
        <div className="hero-overlay w-3/4 h-80   bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl  text-white font-serif uppercase">{title}</h1>
            <p className="mb-5 text-white">
             {subTitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default MenuCover;
