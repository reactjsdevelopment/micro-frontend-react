import * as React from 'react';

class MapUsage extends React.Component {
  render() {
    console.log([...Array(10)]);
    
    const ids = [1, 2, 3, 4, 5];

    const list = ids.map((id) => {
      return <li key={id.toString()}>{id}</li>;
    });

    const elem  = <div>
       <div>jjk</div>
       <div>jjk1</div>
       <div>jjk2</div>
       <div>jjk3</div>
       <div>jjk4</div>
       </div>

 // TODO range

       const final = <div> {list} {elem} </div>

    return <div>{final}</div>; 
  }
}
export default MapUsage;

