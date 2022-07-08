import Card from "./Card";
import bannerSample from "../../public/banner-sample.png";


const CardList: React.FC = () => {
  const sample = [
    {img:bannerSample, date:'May 17,2022', title:'Chinese Soup Dumplings', description:'Chinese Soup Dumplings, or xiaolongbao (小笼包), are perhaps the most perfect single bite of food ever conceived by man. This tantalizing, dreamy snack is probably the most famous dish to come out of the Jiangnan region of China.'},
    {img:bannerSample, date:'May 17,2022', title:'Chinese Soup Dumplings', description:'Chinese Soup Dumplings, or xiaolongbao (小笼包), are perhaps the most perfect single bite of food ever conceived by man. This tantalizing, dreamy snack is probably the most famous dish to come out of the Jiangnan region of China.'},
    {img:bannerSample, date:'May 17,2022', title:'Chinese Soup Dumplings', description:'Chinese Soup Dumplings, or xiaolongbao (小笼包), are perhaps the most perfect single bite of food ever conceived by man. This tantalizing, dreamy snack is probably the most famous dish to come out of the Jiangnan region of China.'},
  ]

    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3 lg:flex lg:justify-between justify-items-center">
        {sample.map((item=>(<Card img={item.img} date={item.date} title={item.title} description={item.description}/>)))}
      </div>
    );
  };
  
  export default CardList;