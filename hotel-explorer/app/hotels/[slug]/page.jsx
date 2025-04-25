import hotels from '../../../data/hotels.json';

export default function HotelDetailPage({params}){
  const hotel = hotels.find(h => h.slug === params.slug);
  
  if (!hotel) return <div>Hotel not found</div>;

  return(
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <img src ={hotel.image} alt = {hotel.name} width = {400} />
    </div>
  );
}