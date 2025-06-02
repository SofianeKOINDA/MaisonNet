import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './controllers/LanguageController';

// Import components
import Header from './views/components/Header';
import Footer from './views/components/Footer';

// Import pages
import HomePage from './views/pages/HomePage';

// CSS for custom colors
const customStyles = `
  :root {
    --color-primary-50: #eef5ff;
    --color-primary-100: #d9e7ff;
    --color-primary-200: #bcd4ff;
    --color-primary-300: #8eb8ff;
    --color-primary-400: #5a93ff;
    --color-primary-500: #3b70ff;
    --color-primary-600: #0F52BA;
    --color-primary-700: #1e40af;
    --color-primary-800: #1e3a8a;
    --color-primary-900: #1e3a6f;
    
    --color-secondary-50: #eefbfb;
    --color-secondary-100: #d5f3f3;
    --color-secondary-200: #aeecec;
    --color-secondary-300: #75dcdc;
    --color-secondary-400: #43c6c6;
    --color-secondary-500: #20B2AA;
    --color-secondary-600: #188f88;
    --color-secondary-700: #176c66;
    --color-secondary-800: #175654;
    --color-secondary-900: #194847;
  }

  .bg-primary-50 { background-color: var(--color-primary-50); }
  .bg-primary-100 { background-color: var(--color-primary-100); }
  .bg-primary-200 { background-color: var(--color-primary-200); }
  .bg-primary-300 { background-color: var(--color-primary-300); }
  .bg-primary-400 { background-color: var(--color-primary-400); }
  .bg-primary-500 { background-color: var(--color-primary-500); }
  .bg-primary-600 { background-color: var(--color-primary-600); }
  .bg-primary-700 { background-color: var(--color-primary-700); }
  .bg-primary-800 { background-color: var(--color-primary-800); }
  .bg-primary-900 { background-color: var(--color-primary-900); }
  
  .bg-secondary-50 { background-color: var(--color-secondary-50); }
  .bg-secondary-100 { background-color: var(--color-secondary-100); }
  .bg-secondary-200 { background-color: var(--color-secondary-200); }
  .bg-secondary-300 { background-color: var(--color-secondary-300); }
  .bg-secondary-400 { background-color: var(--color-secondary-400); }
  .bg-secondary-500 { background-color: var(--color-secondary-500); }
  .bg-secondary-600 { background-color: var(--color-secondary-600); }
  .bg-secondary-700 { background-color: var(--color-secondary-700); }
  .bg-secondary-800 { background-color: var(--color-secondary-800); }
  .bg-secondary-900 { background-color: var(--color-secondary-900); }
  
  .text-primary-50 { color: var(--color-primary-50); }
  .text-primary-100 { color: var(--color-primary-100); }
  .text-primary-200 { color: var(--color-primary-200); }
  .text-primary-300 { color: var(--color-primary-300); }
  .text-primary-400 { color: var(--color-primary-400); }
  .text-primary-500 { color: var(--color-primary-500); }
  .text-primary-600 { color: var(--color-primary-600); }
  .text-primary-700 { color: var(--color-primary-700); }
  .text-primary-800 { color: var(--color-primary-800); }
  .text-primary-900 { color: var(--color-primary-900); }
  
  .text-secondary-50 { color: var(--color-secondary-50); }
  .text-secondary-100 { color: var(--color-secondary-100); }
  .text-secondary-200 { color: var(--color-secondary-200); }
  .text-secondary-300 { color: var(--color-secondary-300); }
  .text-secondary-400 { color: var(--color-secondary-400); }
  .text-secondary-500 { color: var(--color-secondary-500); }
  .text-secondary-600 { color: var(--color-secondary-600); }
  .text-secondary-700 { color: var(--color-secondary-700); }
  .text-secondary-800 { color: var(--color-secondary-800); }
  .text-secondary-900 { color: var(--color-secondary-900); }
  
  .border-primary-500 { border-color: var(--color-primary-500); }
  .border-primary-600 { border-color: var(--color-primary-600); }
  .border-secondary-500 { border-color: var(--color-secondary-500); }
  
  .hover\\:bg-primary-50:hover { background-color: var(--color-primary-50); }
  .hover\\:bg-primary-700:hover { background-color: var(--color-primary-700); }
  .hover\\:bg-secondary-600:hover { background-color: var(--color-secondary-600); }
  
  .hover\\:text-primary-700:hover { color: var(--color-primary-700); }
  .hover\\:text-secondary-500:hover { color: var(--color-secondary-500); }
  
  .focus\\:ring-primary-400:focus { --tw-ring-color: var(--color-primary-400); }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <style>{customStyles}</style>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Additional routes will be added here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;