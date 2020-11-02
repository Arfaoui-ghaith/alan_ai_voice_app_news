import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';


function App() {

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: '83459e557b5599a1d7b8b753d81411252e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({command, articles}) => {
        
        if(command === 'topHeadLines'){
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
     <h1>Alan AI News Application</h1>
     <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
