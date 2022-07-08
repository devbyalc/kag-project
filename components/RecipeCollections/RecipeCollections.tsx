import bannerSample from "../../public/banner-sample.png";
import RecipeCollectCard from "../Card/RecipeCollectCard";

const RecipeCollections: React.FC = () => {
  const sample = [
    { id:1, imgSource: bannerSample, label: "Quick and Easy Dinners" },
    { id:2, imgSource: bannerSample, label: "Best Soups in Town" },
    { id:3, imgSource: bannerSample, label: "Drinks and Desserts" },
    { id:4, imgSource: bannerSample, label: "Chicken Recipes" },
    { id:5, imgSource: bannerSample, label: "Healthy Meals" },
    { id:6, imgSource: bannerSample, label: "Festive Foods" },
  ];
  return (
    <div className="grid lg:grid-cols-3 justify-items-center gap-3">
      {sample.map((item) => (
        <RecipeCollectCard
          key={item.id}
          imgSource={item.imgSource}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default RecipeCollections;
