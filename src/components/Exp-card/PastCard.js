import React from 'react'
import "./styles.css";
import { FaArrowUpFromBracket } from "react-icons/fa6"; 
import hotel1 from '../../assets/hotels/img-1.jpg';
import hotel2 from '../../assets/hotels/img-2.jpg';
import hotel3 from '../../assets/hotels/img-14.jpg';
import hotel4 from '../../assets/hotels/img-4.jpg';
import hotel5 from '../../assets/hotels/img-5.jpg';
import hotel6 from '../../assets/hotels/img-6.jpeg';

const hotels = [
  { id: 1, src: hotel1, alt: 'Hotel 1', label: 'Luxury Stay', description: 'Ocean View', paragraph: 'Great Service' },
  { id: 2, src: hotel2, alt: 'Hotel 2', label: 'Budget Friendly', description: 'City Center', paragraph: 'Affordable Price' },
  { id: 1, src: hotel3, alt: 'Hotel 3', label: 'Luxury Stay', description: 'Ocean View', paragraph: 'Great Service' },
  { id: 4, src: hotel4, alt: 'Hotel 4', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 5, src: hotel5, alt: 'Hotel 5', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 6, src: hotel6, alt: 'Hotel 6', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
 
];

const PastCard = () => {
  return (
    <div>
        <div className=".heading-div">
            <h1>Past Experiences</h1>
        </div>
        <div
        className="card-container">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="card">
          <img src={hotel.src} alt={hotel.alt} className="card-img" />
          <div className="card-content">
            <h3 className="card-label">{hotel.label}</h3>
            <p className="card-description">{hotel.description}</p>
            <p className="card-paragraph">{hotel.paragraph}</p>
          </div>
          <a href={hotel.src} download className="download-button">
          <FaArrowUpFromBracket />
          </a>
        </div>
      ))}
    </div>


    </div>
  )
}

export default PastCard;