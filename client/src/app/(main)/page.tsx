import styles from './hero.module.css';
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className={`${styles.hero} pb-7 flex-grow`}>
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
