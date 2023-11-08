import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

    const Card = ({ title, content }) => (
        <div className="text-black border-2 bg-white p-4">
          <h2 className="text-2xl">Sample CAr</h2>
          <p>{content}</p>
        </div>
      );
      
      const CompaniesCard = () => {
        const numberOfCards = 8; // Specify the number of times you want to repeat the card.
      
        const cardData = {
          
          title: "e Card",
          content: "This is the content of the sample card.",
        };
      
        const cards = Array(numberOfCards).fill(cardData);

        const sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
          };
    return(
     <div>
    <div>Companies</div>
    <div>Featured Companies actively hiring</div>
    {/* now card starts here*/}
    <div>
    <h1>Card Repeater</h1>
      <div className="grid grid-cols-3 gap-4">
        <Slider {...sliderSettings}>
        {cards.map((card, index) => (
          <Card key={index}/>
        ))}
        </Slider>
      </div>
    </div>
    {/* now card ends here */}

     </div>
    )
}
export default CompaniesCard