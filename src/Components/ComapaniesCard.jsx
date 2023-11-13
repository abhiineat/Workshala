import React from "react";
import Slider from "react-slick";
import Logo from "../assets/companyLogo.png";
import Star from "../assets/Star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => (
  <div className="text-black border-2 bg-white rounded-2xl">
    <div className="flex justify-evenly items-center">
      <img src={Logo} alt="Company Logo" />
    </div>
    <div className="bg-custom1-bg h-12 flex-col justify-center items-center text-center mx-24 my-10 rounded-xl overflow-hidden">
      <div className="font-semibold flex justify-center items-center">Cognizant</div>
      <div className="flex justify-evenly items-center">
        <div>
          <img src={Star} alt="Star" style={{ height: 20 }} />
        </div>
        <div>3.3</div> 
        <div>1k Reviews </div>
      </div>
    </div>
    <div className="flex justify-center items-center text-2xl font-bold">Cognizant</div>
    <div className="flex justify-center items-center m-5">
      Lorem Ipsum is simply dummy text of the printing.
    </div>
    <div className="flex justify-center my-5">
      <button className="bg-custom-bg rounded text-white py-2 px-4   ">
        View Jobs
      </button>
    </div>
  </div>
);

const CompaniesCard = () => {
  const numberOfCards = 8;
  
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  };

  return (
    <div>
    <div className="flex-col justify-evenly items-center">
      <div className="flex justify-center items-center m-4">Companies</div>
      <div className="flex justify-center items-center m-4 text-3xl font-bold">
        Featured Companies actively hiring
      </div>
      <div className="m-8 block">
        <Slider {...sliderSettings}>
          {[...Array(numberOfCards)].map((_, index) => (
            <Card key={index} />
          ))}
        </Slider>
      </div>
    </div>
    <div className="flex justify-center items-center">
    <div>
       <button className="bg-custom-bg rounded text-white px-4 py-3">View All Companies</button>
    </div>
    </div>
    </div>

    
  );
};

export default CompaniesCard;
