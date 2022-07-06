import Card from "./Card";

const CardList: React.FC = () => {

    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3 lg:flex lg:justify-between justify-items-center">
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  };
  
  export default CardList;