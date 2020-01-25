import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const url = `https://api.giphy.com/v1/gifs/search?api_key=t1VOrhVWkyahCjQDGHgCYSrCjSDAGjQF&q=${inputValue}&limit=25&offset=0&rating=G&lang=en`;

  const getGiphy = async () => {
    try {
      const fetchedData = await fetch(url);
      const jsonData = await fetchedData.json();
      await setData(jsonData.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div style={{ fontSize: '7rem', textAlign: 'center', margin: '2%', padding: '2%' }}>
        <input style={{ fontSize: '2rem' }} onChange={e => setInputValue(e.target.value)} />
        <button style={{ fontSize: '2rem' }} onClick={() => getGiphy()}>
          search
        </button>
      </div>
      <div style={{ margin: 'auto', textAlign: 'center', width: '70%' }}>
        {data &&
          data.map((item, index) => (
            <img
              key={index}
              style={{ width: '25%', height: '300px' }}
              src={item.images.preview_webp.url}
              alt={item.title}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
