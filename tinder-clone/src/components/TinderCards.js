import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://miro.medium.com/max/1200/1*3U0r3rpqtU0L3AHJ0ygzig.jpeg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {

    }

    const outOfFrame = (name) => {

    }

    return (
        <div className="tinder-cards">
            <div className="cards-container">
                {people && people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;