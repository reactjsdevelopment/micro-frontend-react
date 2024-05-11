import * as React from 'react';

export class MapUsage extends React.Component {
  render() {
    console.log([...Array(10)]);
    const obj = {
      id: 1,
      pid: null,
      children: [
        {
          id: 2,
          pid: 1,
          children: [
            { id: 4, pid: 2, children: [{ id: 6, pid: 4 }] },
          ]
        },
        { id: 3, pid: 1, children: [{ id: 5, pid: 3 }] },
      ]
    };
    const ids = [1, 2, 3, 4, 5];
    const list = ids.map((id) => {
      return <li key={id.toString()}>{id}</li>;
    });

    const elem = <div>
      <div>jjk</div>
      <div>jjk1</div>
      <div>jjk2</div>
      <div>jjk3</div>
      <div>jjk4</div>
    </div>

    // TODO range

    const final = <div> {list} {elem} </div>
    return <div>
      {final}
      <ul>
        {(obj.children || []).map((item, index) => (
          <Demo key={index} obj={item} />
        ))}
      </ul>
    </div>;
  }
}

export function Demo({ obj }) {
console.log(obj);
  const subItem = (obj.children || []).map(item => (
    <ul key={item.id}>
      {/* ✅ Recursion ✅ */}
      <Demo obj={item} />
    </ul>
  ))

  return (
    <li key={obj.id}>
      <a>{obj.pid} pid</a>
      {subItem}
    </li>
  )
}

export const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};