import { useEffect, useState } from "react";
import RecipieCard from "./RecipieCard";


const RecipieCards = ({ handleWantToCook}) => {


    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch('Recipie.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                cardData.map(card => <RecipieCard key={card.id} card={card} handleWantToCook={handleWantToCook}></RecipieCard>)
            }
        </div>
    );
};

export default RecipieCards;