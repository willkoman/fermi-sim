import Nav from './Nav';
import './App.css';
import Universe from './Universe'
import React, { useState, useEffect } from 'react';

function App() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(currentYear => currentYear + 1);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);



  return (
    <div className="App">
      <header className="App-header">

        <Nav year={currentYear} />
        {/* make the container hug the top */}
        <div className='container-fluid' style={{'position':'absolute','top':'10px'}}>
          <div className="row mt-5 ">
            <div className="col-md-4 col-xs-12">
              <Universe initialHeader="Xjirr" initialParagraphs={["Paragraph 1", "Paragraph 2"]} />
            </div>
            <div className="col-md-4 col-xs-12">
            <Universe initialHeader="Oburrjo" initialParagraphs={["Paragraph 1", "Paragraph 2"]} />
            </div>
            <div className="col-md-4 col-xs-12">
            <Universe initialHeader="Xini" initialParagraphs={["Paragraph 1", "Paragraph 2"]} />
            </div>

          </div>
        </div>
      </header>

    </div>
  );
}

export default App;
