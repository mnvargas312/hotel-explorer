import HotelCard from './HotelCard';
import styles from './HotelList.module.css';

export default function HotelList({hotels}){
  return(
    <div className = {styles.hotelGrid}>
      {hotels.map(hotel => (
        <HotelCard key = {hotel.slug} hotel = {hotel} />
      ))}
    </div>
  );
}