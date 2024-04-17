import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {NavLink } from 'react-router-dom';
const EstatesCard = ({card}) => {
    const {id,estate_title,segment_name,description,price,status,area,location,facilities,image} = card;
  return (
   <div className="card card-compact w-full bg-base-100 shadow-xl">
     <div>
      <NavLink to={`/card/${id}`}>
      <div>
        <figure>
          <img className='hover:scale-125 hover:transition delay-150 duration-300 ease-in-out transform-gpu translate-x-4 skew-y-3' src={image} alt="card-image"/>
        </figure>
        <div className="card-body text-gray-600 font-bold ">
          <h2 className="card-title text-2xl">{estate_title}</h2>
         <div className='text-base font-bold'>
         <p>Estate Details: {description}</p>
          <p>segment_name: {segment_name}</p>
          <p>Price: {price}</p>
          <p>Status: {status}</p>
          <p>Area: {area}</p>
          <p>Location: {location}</p>
         </div>
          <div className='flex items-center text-gray-900 font-bold'>
          {facilities.map(facility=>(<p key="facility.id">#{facility}</p>))}
          </div>
          <div className="card-actions justify-start">
            <button  className="text-white btn transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">View Property</button>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
   </div>
  );
};
EstatesCard.propTypes = {
    card : PropTypes.object
}

export default EstatesCard;
