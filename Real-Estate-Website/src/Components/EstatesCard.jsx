import PropTypes from 'prop-types';
import {NavLink } from 'react-router-dom';
const EstatesCard = ({card}) => {
    const {id,estate_title,segment_name,description,price,status,area,location,facilities,image} = card;
  return (
    <div>
      <NavLink to={`/card/${id}`}>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description}</p>
          <p>{segment_name}</p>
          <p>{price}</p>
          <p>{status}</p>
          <p>{area}</p>
          <p>{location}</p>
          {facilities.map(facility=><p key="facility.id">{facility}</p>)}
          <div className="card-actions justify-start">
            <button className="btn btn-primary">View Property</button>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  );
};
EstatesCard.propTypes = {
    card : PropTypes.object
}

export default EstatesCard;
