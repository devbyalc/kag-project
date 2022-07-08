import Image from 'next/image';
import bannerSample from "../../public/banner-sample.png";
import Button from '../UI/Button/Button';

const Card: React.FC = () => {

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
        <figure><Image src={bannerSample} alt="Shoes" layout="intrinsic"/></figure>
        <div className="card-body items-center text-center">
          <span>May 17,2022</span>
          <h2 className="card-title">Chinese Soup Dumplings <br/>(Xiao Long Bao)!</h2>
          <p>Chinese Soup Dumplings, or xiaolongbao (小笼包), are perhaps the most perfect single bite of food ever conceived by man. This tantalizing, dreamy snack is probably the most famous dish to come out of the Jiangnan region of China. </p>
          <div className="card-actions justify-end">
            <Button content="Start Cooking >" onButtonClick={()=> console.log("clicked")} type="main"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;