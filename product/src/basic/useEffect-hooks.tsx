import * as React from 'react';
import { useEffect, useState } from 'react';

export default function UseEffectHookApp() {
  const [riverInformation, setRiverInformation] = useState({});
  const [river, setRiver] = useState('nile');

  useEffect(() => {
    console.log('this will run when the component mounts and anytime the stateful data changes');

  });

  useEffect(() => {
    console.log('this will run, when the component is first initialized');
           getRiverInformation()
  .then(d => {
    setRiverInformation(d)
  })
  }, []);

  useEffect(() => {
    console.log(' this will run when the component is destroyed or before the component is removed from UI.');

    return () => console.log('Goodbye Component');
  });

  return(
    <div>
      <h2>River Information</h2>
      {/* <ul>
        <li>Continent: {riverInformation.continent}</li>
        <li>Length: {riverInformation.length}</li>
        <li>Outflow: {riverInformation.outflow}</li>
      </ul> */}

          <h1>World's Longest Rivers</h1>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>
      <RiverInformation name={river} />
    </div>
  )
}

export function getRiverInformation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        continent: 'Africa',
        length: '6,650 km',
        outflow: 'Mediterranean',
      });
    }, 1500);
  });
}


export function getSpecificRiverInformation(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        rivers[name]
      )
    }, 1500)
  })
}

const rivers = {
 nile: {
   continent: 'Africa',
   length: '6,650 km',
   outflow: 'Mediterranean'
 },
 amazon: {
   continent: 'South America',
   length: '6,575 km',
   outflow: 'Atlantic Ocean'
 },
 yangtze: {
   continent: 'Asia',
   length: '6,300 km',
   outflow: 'East China Sea'
 },
 mississippi: {
   continent: 'North America',
   length: '6,275 km',
   outflow: 'Gulf of Mexico'
 }
}

export function RiverInformation({ name }) {
const [riverInformation, setRiverInformation] = useState({});

  useEffect(() => {
      console.log('this will run only when count state changes');
    getSpecificRiverInformation(name)
    .then(data =>
      setRiverInformation(data)
    );
  }, [name])


  return(
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation.continent}</li>
        <li>Length: {riverInformation.length}</li>
        <li>Outflow: {riverInformation.outflow}</li>
      </ul>
    </div>
  )
}
