import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Book1 from './pages/Book1';
import Book2 from './pages/Book2';
import Book3 from './pages/Book3';
import { ScrollToHash } from './components/ScrollToHash';
import { BookingProvider } from './components/BookingModal';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BookingProvider>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/book1" element={<Book1 />} />
          <Route path="/book2" element={<Book2 />} />
          <Route path="/book3" element={<Book3 />} />
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>,
);
