import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'

describe("author-quiz", () =>{
  it("renders without crashing",() =>{
      const div = document.getElementById("div");
      ReactDOM.render(<AuthorQuiz />, div);
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
