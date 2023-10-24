import PropTypes from 'prop-types';

export default function Card({ data }) {
   return (
      <div>
         <div className="card">
            <div className="card-body">
               <h5 className="card-title">Nama :{data.nama}</h5>
               <h6 className="card-subtitle mb-2 text-muted">Umur :{data.age}</h6>
               <p className="card-text">Daerah :{data.daerah}</p>
            </div>
         </div>
      </div>
   );
}

Card.propTypes = {
   data: PropTypes.shape({
      nama: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      daerah: PropTypes.string.isRequired,
   }).isRequired,
};