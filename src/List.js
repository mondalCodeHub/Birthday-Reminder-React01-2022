import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {/* <h2 className='listOne'>List component</h2> */}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return <article key={id} className='personContainer'>
          <div className='person'>
            <img src={image} alt={name} className='personImage'/>
            <div className="peronInfo">
              <h2>{name}</h2>
              <h3 className='yearsOldinfo'>{age} Years Old</h3>
            </div>
          </div>

        </article>
      })}
    </>
  );
};

export default List;