import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const result = await response.json();
      setData(result);      
      if (result.length === 0) {
        setError("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      {error && <div className="error-message">{error}</div>}
      {!error && data.length > 0 && (
        <div className="data-display">
          {data.map(item => (
            <div key={item.id} className="data-item">
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
