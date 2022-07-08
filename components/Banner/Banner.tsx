import styles from "./Banner.module.css";
import Image from "next/image";
import bannerSample from "../../public/banner-sample.png";
import Button from "../UI/Button/Button";

const Banner: React.FC = () => {

  console.log(bannerSample)
  return (
    <div
      className="hero min-h-screen lg:min-h-min"
      style={{ backgroundImage: `url(${bannerSample.src})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold lg:text-2xl">Hello there, <br/> this website is under construction</h1>
          <p className="mb-5">
            See you in August 2022
          </p>
            <Button content="Recipe Collection" glass={true} onButtonClick={()=> console.log("clicked")} type="main"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
