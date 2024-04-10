import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import EstatesCard from "../Components/EstatesCard";
const Home = () => {
  const card = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 ">
        OUR BEST OFFERS
      </h1>
      <p className="border-t-2 border-indigo-500 m-2 sm:m-3 lg:m-5 p-5"></p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5 gap-3 m-3 sm:m-5 pb-8">
        {
         card.map(card=><EstatesCard key={card.id} card={card}></EstatesCard>) 
        }
      </div>


      <p className="border-t-2 border-indigo-500 m-2 sm:m-3 lg:m-5"></p>
      <div className="lg:flex lg:justify-between items-center m-3 sm:m-5 lg:py-16 py-5">
        <h1 className="sm:text-3xl font-bold lg:w-3/4 w-full lg:pr-5 pr-3">
          GET STARTED ON BUYING YOUR NEW HOME! FIND YOUR AGENT!
        </h1>
        <button className="bg-[#27b6de] text-white lg:text-xl text-base px-2 py-3 font-bold lg:mt-5 mt-2">
          CLICK HERE
        </button>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://source.unsplash.com/random/301x301/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?0"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?1"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?2"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?3"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?4"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?5"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?6"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://source.unsplash.com/random/200x200/?7"
            />
            <img
              src="https://source.unsplash.com/random/302x302/"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
