// import React from 'react';
// import ReactDOM from 'react-dom';
// import Login from './pages/Login/Login';
// //import Main from './pages/main/Main';
// //import * as serviceWor.Appker from './serviceWorker';

// ReactDOM.render(
//   <Login/>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// //serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <h1>React Testing Library</h1>
      <hr />
      <LoginForm />
      <hr />
      <NotFound path="/abc" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
