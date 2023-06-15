export default function Card({onClose, id, name, status, species, gender, origin, image}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <img src={image} alt=''
         onClose={() => alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}
