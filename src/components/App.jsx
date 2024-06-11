import { useState } from 'react';
import { HomePage } from './HomePage';
import { Button, Typography } from '@mui/material';
import '../App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'qa'

  return (
    <div className="App">
      <header>
        <Typography variant="h3">10Katef 🦁</Typography>
        <nav>
          <Button variant="contained" onClick={() => setCurrentPage('home')}>
            Home
          </Button>
          <Button variant="contained" onClick={() => setCurrentPage('qa')}>
            Q&A
          </Button>
        </nav>
      </header>
      {currentPage === 'home' ? <HomePage /> : <QAPage />}
    </div>
  );
}

function QAPage() {
  return <Typography variant="h5">Q&A Page</Typography>;
}

export default App;
