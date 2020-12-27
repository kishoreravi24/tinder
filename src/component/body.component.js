import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './body.component.css';
import axios_val from '../axios';

function BodyCards(){
    const [people,setPeople] = useState([]);

    useState(() => {
        async function fetchData() {
            const request = await axios_val.get('/tinder');
            setPeople(request.data);
            console.log(request)
        }
        fetchData();
    },[])

    const swiped = (direction, name) => {
        console.log(direction);
    }

    const outOfFrame = (name) => {
        console.log(name);
    }

    return(
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((persons) => (
                    <TinderCard
                        className="swipe"
                        key={persons.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir,persons.name)}
                        onCardLeftScreen={()=> outOfFrame(persons.name)}
                    >
                        <div style={{backgroundImage: `url(${persons.url})`}} className="card">
                            <h3>{persons.name}</h3>
                            {console.log(persons.url)}
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default BodyCards;