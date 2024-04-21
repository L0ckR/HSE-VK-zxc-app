import { Header } from './components/header';
import { MainContent } from './components/mainContent';
import { Footer } from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div className="bg-mask flex flex-col h-full justify-between font-Roboto text-[3vmin]">
            <Header />
            <MainContent />
            <Footer />
          </div>} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
