import image from "../assets/bg-image.jpeg";
import Banner from "../Components/Banner";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <h1 className="text-5xl text-center m-8">OUR BEST OFFERS</h1>
      <p className="border-t-4 border-indigo-500 m-5 p-5" ></p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-10/12 mx-auto">
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#27b6de] text-white font-bold">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#27b6de] text-white font-bold">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#27b6de] text-white font-bold">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#27b6de] text-white font-bold">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#27b6de] text-white font-bold">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#27b6de] text-white font-bold">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
      <p className="border-t-4 border-indigo-500 m-5 p-5"></p>
      <div className="lg:flex lg:justify-between lg:py-16 py-5 w-10/12 mx-auto">
        <h1 className="lg:text-4xl text-2xl font-bold lg:w-3/4 w-full lg:pr-5 pr-3">GET STARTED ON BUYING YOUR NEW HOME! FIND YOUR AGENT!</h1>
        <button className="bg-[#27b6de] text-white lg:text-2xl text-base px-2 py-2 font-bold md:mt-5 mt-4">CLICK HERE</button>
      </div>
      <div>

      </div>
    </>
  );
};

export default Home;
