import * as React from 'react';

const PAGES = {
  home: Tick,
  services: Demo,
};

const Page = (props) => {
  console.log(props.page);
  const Handler = PAGES[props.page];

  return <Handler {...props} />;
};

function Tick() {
  return (
    <div>
      <h1>Hello, world! Tick</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

function Demo() {
  return (
    <div>
      <p> services </p>
    </div>
  );
}

export default Page;
