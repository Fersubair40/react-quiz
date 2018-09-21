import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from "underscore";
import {BrowserRouter, Route, Link} from "react-router-dom";
const authors = [
    {
        name: "Mark Twain",
        imageUrl: "images/authors/marktwain.jpg",
        imageSource: "Wikimedia Commons",
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: "Joseph Conrad",
        imageUrl: "images/authors/josephconrad.jpg",
        imageSource: "Wikimedia Commons",
        books: ["Heart of darkness"]
    },
    {
        name:"J.K. Rowling",
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: "Wikimedia Commmons",
        books: ["Harry Potter And the Sorcerers Stone"]
    },
    {
        name: "Stephen King",
        imageUrl: "images/authors/stephenking.jpg",
        imageSource: "Wikimedia Commons",
        books: ["The Shining", "IT"]
    },
    {
        name: "Charles Dickins",
        imageUrl: "images/authors/dickens.jpg",
        imageSource: "Wikimedia Commons",
        books: ["David Copperfield"," A Tale of Two City"]
    },
    {
        name: "William Shakespeare",
        imageUrl: "images/authors/shakespeare.jpg",
        imageSource:"Wikimedia Coomons",
        books: ["Hamlet","Macbeth","Romeo and Juliet"]
    }
]; 

function getTurnData(authors){
    const allBooks = authors.reduce(function(p, c , i){
        return p.concat(c.books);
    }, []);
    const fourRandomBooks =shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);
    return {
        books: fourRandomBooks,
        author: authors.find((author) => author.books.some((title) => title === answer))
    }
}
 function resetState() {
return {
    turnData: getTurnData(authors),
    highlight: ""
};
  }



let state = resetState();
 const onAnswerSelected =(answer) =>{
     const isCorrect = state.turnData.author.books.some((book) => book === answer);
     state.highlight = isCorrect ? "correct" : "wrong";
render();
     
 }
function App() {
    return (<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} onContinue={() => {
        state = resetState();
        render();
    }} />);
}
  function render(){
      ReactDOM.render(
  <BrowserRouter>
  <Route exact path="/" component={App}/>
      </BrowserRouter>, document.getElementById('root'));
     registerServiceWorker();
  }
  render();
