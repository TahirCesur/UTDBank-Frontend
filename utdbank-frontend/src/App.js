
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import TopBar from './components/common/TopBar';
import FaqsPage from './pages/FaqsPage';
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
      <BrowserRouter>
      <TopBar/>
      <Routes>
      <Route path="/faqs" element={ <FaqsPage/>}/>
      <Route path="/services" element={ <ServicesPage/>}/>
      <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    


   
    
    
  );
}

export default App;
