import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';

import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

function App() {
  const alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  const [activeArticle, setActiveArticle] = useState(-1);

  /*useEffect(() => {
    alanBtn({
      key: '83459e557b5599a1d7b8b753d81411252e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({command, articles, number}) => {
        
        if(command === 'topHeadLines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if(command === 'open') {
    
          if(isNaN(parseInt(number))){
            if(wordsToNumbers(number, {fuzzy: true}) > articles.length){
              alanBtn().playText(`article number ${wordsToNumbers(number, {fuzzy: true})} does'nt exist, we only have ${articles.length} articles`);
            } else { 
              if(wordsToNumbers(number, {fuzzy: true}) === undefined){
                alanBtn().playText(`you didn't said the number correctly, try again!`);
              }
              else{window.open(articles[wordsToNumbers(number, {fuzzy: true})].url, '_blank');}
              
              }
          }
          else {
            if(number > articles.length){
              alanBtn().playText(`article number ${number} does'nt exist, we only have ${articles.length} articles`);
            } else { 
              window.open(articles[number].url, '_blank');
                   }
          }

          
          
        }
      },
    });
  }, []);*/

  return (
    
    <div className="App">
     <div className={classes.logoContainer}>
      <img  src={alanLogoSrc} className={classes.alanLogo} alt="alan logo"/>
     </div>
     <NewsCards key={activeArticle} articles={newsArticles} activeArticle={activeArticle} />
    </div> 
  );
}

export default App;
