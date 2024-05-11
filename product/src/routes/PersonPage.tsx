import * as React from 'react';
import { Link, useParams } from 'react-router-dom';


const PersonPage = () => {
  // { match } // argument
  // const {
  //   params: { personId },
  // } = match;
  let { personId } = useParams();
  console.log(personId, 'personId')

  return (
    <div>
      <span>PersonPage</span>
          {/* <h1>Name: {personId}</h1> */}
          <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default PersonPage;