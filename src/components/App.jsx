import { useState } from 'react';
import { HomePage } from './HomePage';
import '../App.css'; // Add this line at the top of your App.tsx file

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'qa'

  return (
    <div className="App">
      <header>
        <h1>App Title</h1>
        <nav>
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('qa')}>Q&A</button>
        </nav>
      </header>
      {currentPage === 'home' ? <HomePage /> : <QAPage />}
    </div>
  );
}

function QAPage() {
  return <h2>Q&A Page</h2>;
}

export default App;
