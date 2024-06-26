import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUpFromBracket } from "react-icons/fa6"; 
import hotel1 from '../../assets/hotels/img-1.jpg';
import hotel2 from '../../assets/hotels/img-2.jpg';
import hotel3 from '../../assets/hotels/img-14.jpg';
import hotel4 from '../../assets/hotels/img-4.jpg';
import hotel5 from '../../assets/hotels/img-5.jpg';
import hotel6 from '../../assets/hotels/img-6.jpeg';
import hotel7 from '../../assets/hotels/img-7.jpg';
import hotel8 from '../../assets/hotels/img-8.jpg';
import hotel9 from '../../assets/hotels/img-9.jpg';
import hotel10 from '../../assets/hotels/img-10.jpg';
import hotel11 from '../../assets/hotels/img-11.jpg';
import hotel12 from '../../assets/hotels/img-12.jpg';

const hotels = [
  { id: 1, src: hotel1, alt: 'Hotel 1', label: 'Stay in Princes Rain house', description: 'Ocean View', paragraph: 'Great Service' },
  { id: 2, src: hotel2, alt: 'Hotel 2', label: 'Budget Friendly', description: 'City Center', paragraph: 'Affordable Price' },
  { id: 3, src: hotel3, alt: 'Hotel 3', label: 'Luxury Stay', description: 'Ocean View', paragraph: 'Great Service' },
  { id: 4, src: hotel4, alt: 'Hotel 4', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 5, src: hotel5, alt: 'Hotel 5', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 6, src: hotel6, alt: 'Hotel 6', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 7, src: hotel7, alt: 'Hotel 7', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 8, src: hotel8, alt: 'Hotel 8', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 9, src: hotel9, alt: 'Hotel 9', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 10, src: hotel10, alt: 'Hotel 10', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 11, src: hotel11, alt: 'Hotel 11', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
  { id: 12, src: hotel12, alt: 'Hotel 12', label: 'Family Fun', description: 'Kids Friendly', paragraph: 'Fun Activities' },
];

const Card = () => {
  return (
    <div className="card-container">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="card">
          <Link to={`/hotel/${hotel.id}`}>
            <img src={hotel.src} alt={hotel.alt} className="card-img" />
            <div className="card-content">
              <h3 className="card-label">{hotel.label}</h3>
              <p className="card-description">{hotel.description}</p>
              <p className="card-paragraph">{hotel.paragraph}</p>
            </div>
          </Link>
          <a href={hotel.src} download className="download-button">
            <FaArrowUpFromBracket />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;




