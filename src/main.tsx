import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Privacy from './pages/Privacy';
import { ScrollToHash } from './components/ScrollToHash';
import { BookingProvider } from './components/BookingModal';
import { CookieNotice } from './components/CookieNotice';
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
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <CookieNotice />
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>,
);
