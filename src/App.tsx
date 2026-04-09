import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CTAStrip from './components/CTAStrip';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BusinessesOrganizationsPage from './pages/BusinessesOrganizationsPage';
import HirePage from './pages/HirePage';
import ApplyJobPage from './pages/ApplyJobPage';
import AboutCompanyPage from './pages/AboutCompanyPage';
import EmployersPage from './pages/EmployersPage';
import CandidatesJobseekersPage from './pages/CandidatesJobseekersPage';
import GalleryPage from './pages/GalleryPage';
import OurTeamPage from './pages/OurTeamPage';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* Page meta updater */
function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metas: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'Mojake Consult | HR Consulting, Industrial Staffing & Supply Solutions Nigeria',
        description: 'Nigeria\'s leading HR consulting, industrial staffing, executive search, and raw materials supply firm. Serving Ota, Agbara, Lagos and West Africa.',
      },
      '/services': {
        title: 'HR Services & Supply Solutions Nigeria | Staffing, Payroll, Materials | Mojake Consult',
        description: 'Comprehensive HR and supply solutions: industrial staffing, executive search, payroll outsourcing, raw materials, packaging, chemicals. Serving Ota, Lagos, and West Africa.',
      },
      '/careers': {
        title: 'Careers at Mojake Consult | HR Jobs, Admin Roles, Recruitment Careers Nigeria',
        description: 'Join Mojake Consult Limited. Current openings: Admin Support, HR Associates, Business Development, Supply Chain. Build your career in Nigeria\'s leading industrial HR and supply firm.',
      },
      '/contact': {
        title: 'Contact Mojake Consult | HR Consulting & Supply Solutions Ota, Lagos, Nigeria',
        description: 'Get in touch with Mojake Consult Limited. Visit our Ota office, call our line, or email for staffing, HR, and supply solutions. 24/7 support for manufacturing clients.',
      },
    };
    const meta = metas[pathname] || metas['/'];
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMeta />
      <div className="flex flex-col min-h-screen" style={{ background: '#f8f8fc' }}>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/businesses-organizations" element={<BusinessesOrganizationsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hire" element={<HirePage />} />
            <Route path="/apply" element={<ApplyJobPage />} />
            <Route path="/about" element={<AboutCompanyPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/candidates-jobseekers" element={<CandidatesJobseekersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <CTAStrip />
        <Footer />
      </div>
      <WhatsAppButton />
    </BrowserRouter>
  );
}
