import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // useState()
  const [people, setPeople] = useState(data);
  // retrun
  return <main>
    <section className='container'>
      <h2 className='birthday'>{people.length} Birthday Today</h2>
      <List people={people} />
      <button onClick={() => setPeople([])} className='btnOne' type='button' >Clear All</button>
    </section>
    <p className='mondalcodehub'>@mondalcodehub(ReactJSBasic-Project-Nov2022)#01</p>
  </main>
}

export default App;