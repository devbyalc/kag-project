import styles from "./Banner.module.css";
import Image from "next/image";
import bannerSample from "../../public/banner-sample.png";

const Banner: React.FC = () => {

  console.log(bannerSample)
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bannerSample.src})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there, <br/> this website is under construction</h1>
          <p className="mb-5">
            See you in August 2022
          </p>
          <button className="btn bg-main-900 glass">Random Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
