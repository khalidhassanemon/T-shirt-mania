import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Matir ring');
const Grandpa = () => {
    const [house,setHouse]=useState(1);
    // const house = 7;
    // const ring = 'diamond ring';
    return (
        <RingContext.Provider value={[house,setHouse]}>
            <div className='gd'>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;