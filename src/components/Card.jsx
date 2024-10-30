import './card.css'
import PropTypes from 'prop-types';

function Card({ person }) {
    if (!person) return null; 
  return (
    <div className="card text-justify" style={{ width: "18rem" }}>
      <img src={person.image} className="card-img-top img-fluid" alt={ person.name } />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">{person.description}</p>
        <a href="#" className="btn btn-primary mt-4">Go somewhere</a>
      </div>
      
    </div>
  );
}

//validazione props
Card.propTypes = {
    person: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };



export default Card;