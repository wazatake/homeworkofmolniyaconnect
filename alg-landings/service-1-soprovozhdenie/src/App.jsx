import { useState } from 'react';
import './styles/variables.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import Hero from './sections/Hero';
import ForWhom from './sections/ForWhom';
import Deliverables from './sections/Deliverables';
import Benefits from './sections/Benefits';
import Case from './sections/Case';
import FAQ from './sections/FAQ';
import CTABlock from './sections/CTABlock';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onBook={openModal} />
      <main>
        <Hero onBook={openModal} />
        <ForWhom />
        <Deliverables />
        <Benefits />
        <Case onBook={openModal} />
        <FAQ />
        <CTABlock onBook={openModal} />
      </main>
      <Footer />
      {modalOpen && <BookingModal onClose={closeModal} />}
    </>
  );
}
