import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export const HistoryDemo = () => (
  <div>
      <p>HistoryDemo </p>;

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  </div>
);

export default HistoryDemo;

function HomePage() {

  const history = useNavigate();
  const confirm = (e) => {
    history('/');
  };
  return (
    <div>
      <p>Welcome Home</p>
      <button onClick={() => history('/about',{ state:  { from: 'HomePage' }})}>
        About
      </button>
      <button onClick={() => history('/contact',{ state:  { from: 'HomePage' }})}>
        Contact
      </button>
    </div>
  );
}
// function About() {
//     return <p>About Page</p>;
// }
function About() {
  const { state } = useLocation();
  console.log(state);
  console.log(location, 'About');
  
  const history = useNavigate();
  return (
    <div>
      <p>About Page </p>
      <button
        onClick={() => {
          history(-1); // you will go one page back
        }}
      >
        Go back
      </button>
      {/* <p> You were redirected from {location.state.from}</p> */}
    </div>
  );
}

function Contact() {
  const history = useNavigate();
  return (
    <div>
      <p>Contact Page</p>
      <button
        onClick={() => {
          history(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
}

function Foo() {
  return <p>Contact Bar</p>;
}

export { HomePage, About, Contact, Foo };
