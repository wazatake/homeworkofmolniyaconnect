import { useState } from 'react';
import './styles/variables.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import Hero from './sections/Hero';
import ForWhom from './sections/ForWhom';
import WhatWeCheck from './sections/WhatWeCheck';
import Process from './sections/Process';
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
        <WhatWeCheck />
        <Process />
        <Case onBook={openModal} />
        <FAQ />
        <CTABlock onBook={openModal} />
      </main>
      <Footer />
      {modalOpen && <BookingModal onClose={closeModal} />}
    </>
  );
}
