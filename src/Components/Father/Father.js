import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../MySelf/Myself';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h3>Father</h3>
            <p><small>House No:{house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;