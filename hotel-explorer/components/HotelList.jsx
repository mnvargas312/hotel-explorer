import HotelCard from './HotelCard';

export default function HotelList({hotels}){
  return(
    <div className = "grid grid-cols-1 md:grid-cols-3 gap-6">
      {hotels.map(hotel => (
        <HotelCard key = {hotel.slug} hotel = {hotel} />
      ))}
    </div>
  );
}