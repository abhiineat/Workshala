import React from "react";
import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card } from "./ComapaniesCard";
import axios from "axios";

function Companies () {
    const [apiData, setApiData] = useState([]);
    const numberOfCards = 15;
    const cards = [];

     useEffect(() => {
      axios
        .get("https://workshala.onrender.com/getCompanies")
        .then((response) => setApiData(response.data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

      for (let i = 0; i < numberOfCards; i += 3) {
      cards.push(
        <div key={i} className="flex justify-evenly my-5 md:my-10 flex-wrap">
          {apiData.slice(i, i + 3).map((company, index) => (
            <Card key={index} company={company} />
          ))}
        </div>
      );
    }
    return(
        <>
        <Navbar/>
        <div>
            <div className="flex items-center py-10 pl-10 bg-service-bg bg-opacity-10 mb-10 mt-5">
                <p className="text-3xl font-bold font-worksans text-worksans">Featured Companies Actively Hiring</p>
            </div>
            <div className="md:flex md:justify-evenly justify-center items-center mb-10 "> 
               <div className=" flex justify-center items-center">
                <div class="w-64 my-10 md:m-0 ml-3">
                <select class="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow-custom "
                >
                <option value="">Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Pune">Pune</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Kolakata">Kolakata</option>
                <option value="Noida">Noida</option>
                <option value="Chennai">Chennai</option>
                </select>
                </div>
                </div>
                <div className=" flex justify-center items-center">
                <div class="w-64 my-10 md:m-0 ml-3">
                <select class="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow-custom"
                >
                <option value="">Industry</option>
                <option value="Product Based & IT Services">Product Based & IT Services</option>
                <option value="Product Based">Product Based</option>
                <option value="IT Services">IT Services</option>
                <option value="Transport E-Commerce">Transport E-Commerce</option>
                <option value="Electronics Industry">Electronics Industry</option>
                <option value="Edutech">Edutech</option>
                <option value="Electronics and Goods">Electronics and Goods</option>

                </select>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <div class="w-64 my-10 md:m-0 ml-3 ">
                <select class="block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow-custom"
                >
                <option value="">Company Type</option>
                <option value="Foreign MNC">Foreign MNC</option>
                <option value="Indian MNC">Indian MNC</option>
                </select>
                </div>
                </div>
            </div>
            {/* Cards  Starts*/}
             <div>
            <div className="bg-service-bg bg-opacity-10 flex-wrap md:m-0">
            {cards}
            </div>
             </div>
            {/* Cards  Ends*/}
        </div>
        <Footer/>
        </>
    )
}
export default Companies