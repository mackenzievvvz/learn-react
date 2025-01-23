import { Scientist } from '@/types/scientist';
import Avatar from '../components/profile_props';

function displayBold(text: string, value: string ) {
  return (
    <li>
      <b>{text}</b>
      {value}
    </li>
  )
}

export function DisplayProfile({person, profession, awards, discovered}: Scientist) {
  return (
  <section className="profile">
        <h2>{person.name}</h2>
        <Avatar
            person={{ name: person.name, imageId: person.imageId}}
            size={70} />
        <ul>
          {displayBold("Profession: ", profession)}
          {displayBold("Awards: ", awards)}
          {displayBold("Discovered: ", discovered)}
        </ul>
      
      </section>
      );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <DisplayProfile
        person={{name: "Maria Skłodowska-Curie", imageId: "szV5sdG"}}
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (element)"
      />
      <DisplayProfile
        person={{name: "Katsuko Saruhashi", imageId: "YfeOqp2"}}
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
