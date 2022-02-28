import React from 'react';

function Home() {
    return(
        <section>
            <div className="container-fluid">
                <h1 className="mt-5">Icy Scout</h1>
                <img alt="Team3926 Logo" src={require('../resources/Logocolor.png')} />
            </div>
        </section>
    );
}

export default Home;