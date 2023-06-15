import Card from './Card';

export default function Cards({characters}) {
   return <div>{
            characters.map(({id, name, status, species, gender, origin, image}) => {
              return <Card 
              key = {id} 
              id = {id}
              status = {status}
              species = {species}
              gender = {gender} 
              origin = {origin.name}
              image = {image}
              name = {name}
              />
            })
      }</div>;
}
