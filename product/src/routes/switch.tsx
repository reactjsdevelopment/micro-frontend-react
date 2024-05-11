import * as React from 'react';
import { Link, BrowserRouter as Router, Route, Routes, redirect as Redirect, Navigate } from "react-router-dom";
  const Home = () => {
  return <div>Home Page</div>;
};
export function SwitchRoute() {

  return (
    <div>
      <h1>Hello, world! Switch Demo</h1>
      <Router>
      <Routes>
        <Route
          path="/items"
          Component={() => (
            <div>
              <em>List of items</em>
            </div>
          )}
        />
        <Route path="/items/2" Component={() => <div>Item with id of 2</div>} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
      </Routes>
      </Router>
      {/* <Redirect to={{ pathname: '/login', state: { from: 'props.location' } }} /> */}
  

    </div>
  );
}

