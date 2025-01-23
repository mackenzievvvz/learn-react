import Avatar from '../components/profile_props';

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}
export default function List() {
  const listItems = people.map(person =>
    <li key={person.id + person.name}>
      <Avatar
        person={{ name: person.name, imageId: person.imageId}}
        size={70} />
      <h2>{person.name}</h2>
      <p>{person.profession}</p>
      <p>{person.accomplishment}</p>
    </li>
  );
  return <ul>{listItems}</ul>;
}