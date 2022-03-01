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
            <div class="container-fluid">
                <h1 class="mt-5">Data</h1>

               
            </div>
        </section>
    );

}

export default Graph;