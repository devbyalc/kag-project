import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import CardList from "../components/Card/CardList";

const Home: NextPage = () => {
  return (
    <div className="grid gap-5">
      <div>
        <Banner />
        <div className="divider"></div>
      </div>
      <div>
        <p className="text-2xl font-semibold mb-6">Our Latest Recipes</p>
        <CardList />
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Home;
