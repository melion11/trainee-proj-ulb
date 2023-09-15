import React, {useState} from 'react';
import styles from './counter.module.scss'
import {Link} from 'react-router-dom';

export const Counter = () => {
   const [count, setCount] = useState(0)

    return (
        <div className={styles.root}>
            {count}
            <button onClick={()=> setCount(count + 1)}>+</button>
            <Link to={'/main'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
        </div>
    );
};

