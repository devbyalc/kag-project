import bannerSample from "../../public/banner-sample.png";
import RecipeCollectCard from "../Card/RecipeCollectCard";

const RecipeCollections: React.FC = () => {
  const sample = [
    { imgSource: bannerSample, label: "Quick and Easy Dinners" },
    { imgSource: bannerSample, label: "Best Soups in Town" },
    { imgSource: bannerSample, label: "Drinks and Desserts" },
    { imgSource: bannerSample, label: "Chicken Recipes" },
    { imgSource: bannerSample, label: "Healthy Meals" },
    { imgSource: bannerSample, label: "Festive Foods" },
  ];
  return (
    <div className="grid lg:grid-cols-3 justify-items-center gap-3">
      {sample.map((item) => (
        <RecipeCollectCard
          imgSource={item.imgSource}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default RecipeCollections;
