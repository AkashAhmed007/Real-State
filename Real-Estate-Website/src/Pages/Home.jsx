import image from "../assets/bg-image.jpeg";
import Banner from "../Components/Banner";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <h1 className="text-5xl text-center m-8">OUR BEST OFFERS</h1>
      <p className="border-t-4 border-indigo-500 m-5 p-5" ></p>
      <div className="grid grid-cols-3 gap-5 w-10/12 mx-auto">
        <div className="card">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Learn now!</button>
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
              <button className="btn btn-primary">Learn now!</button>
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
              <button className="btn btn-primary">Learn now!</button>
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
              <button className="btn btn-primary">Learn now!</button>
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
              <button className="btn btn-primary">Learn now!</button>
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
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
      <p className="border-t-4 border-indigo-500 m-5 p-5" ></p>
      <div className="flex justify-between py-16 w-10/12 mx-auto">
        <h1 className="text-4xl font-bold w-3/4 pr-5">GET STARTED ON BUYING YOUR NEW HOME! FIND YOUR AGENT!</h1>
        <button className="bg-[#27b6de] text-white text-2xl px-2 py-2 font-bold">CLICK HERE</button>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Home;
