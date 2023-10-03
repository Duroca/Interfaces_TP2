import React from 'react'
import Card1 from './Card1';


const Carousel_card1 = (props) => {
    return (
      <div className="carousel">
        {props.cards.map((card, index) => (
          <Card1
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    );
}
  
export default Carousel_card1;
