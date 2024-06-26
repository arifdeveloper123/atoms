import React from 'react';
import "./styles.css"
import { useParams } from 'react-router-dom';
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
  { id: 1, src: hotel1, alt: 'Hotel 1', label: 'Luxury Stay', description: 'Ocean View', paragraph: 'Great Service' },
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

const HotelDetail = () => {
  const {id} = useParams();
  const hotel = hotels.find(h => h.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div>
      <h1>{hotel.label}</h1>
      <img src={hotel.src} alt={hotel.alt} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}/>
      <p>{hotel.description}</p>
      <p>{hotel.paragraph}</p>
    </div>
  );
};

export default HotelDetail;
