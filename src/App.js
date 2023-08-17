import Userform from './Userform'
import './App.css';
import Userdata from './Userdata';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  const [allData, setAllData] = useState([]);

  const clearAllData = () => {
    setAllData([]);
  };

  return (
    < >
      <Navbar />
      <div className='app'>
        <div className="app-container">
          <Userform setAllData={setAllData} allData={allData} clearAllData={clearAllData} />
          <Userdata data={allData} />
        </div>
      </div>
    </>
  )
}

export default App;
