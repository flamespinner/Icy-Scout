import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Graph() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/TeamMatchData');
        const items = await data.json();
        setItems(items);
        console.log(data);
    };

    return(
        <section>
            <div className="container-fluid">
                <h1 class="mt-5">Data</h1>
                    <button onClick={sayHello}>Team Points</button>
                    <button onClick={sayHello}>Low Goal</button>
                    <button onClick={sayHello}>High Goal</button>
                    <button onClick={sayHello}>Climb</button>
                    <button onClick={sayHello}>Auto</button>
                    <button onClick={sayHello}>CPS</button>
                    <button onClick={sayHello}>Defense</button>

            </div>
        </section>
    );

}

function sayHello() {
    alert('You clicked me!');
  }

export default Graph;