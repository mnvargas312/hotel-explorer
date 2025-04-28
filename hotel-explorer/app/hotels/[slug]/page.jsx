import { promises as fs } from 'fs';
import path from 'path';
import Layout from '../../../components/Layout';

export default async function HotelDetailPage({ params }) {
  // Read hotels.json dynamically
  const filePath = path.join(process.cwd(), 'data', 'hotels.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const hotels = JSON.parse(jsonData);

  const hotel = hotels.find(h => h.slug === params.slug);

  if (!hotel) {
    return (
      <Layout>
        <h1>Hotel Not Found</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <img src={`/images/${hotel.image}`} alt={hotel.name} width={400} />
    </Layout>
  );
}
