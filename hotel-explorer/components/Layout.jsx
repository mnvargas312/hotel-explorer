import Header from './Header';
import Footer from './Footer';
import Container from './Container';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
}
