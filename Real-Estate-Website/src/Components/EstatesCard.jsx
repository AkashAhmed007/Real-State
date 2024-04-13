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
          <img src={image} alt="card-image"/>
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
            <button className="btn btn-success">View Property</button>
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
