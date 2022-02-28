import React from 'react';

function Graph() {
    return(
        <section>
            <div className="container-fluid">
                <h1 className="mt-5">Data Graphs</h1>
                <div id="chartholder"></div>
                <script src="./RGraph.js"></script>
            </div>
        </section>
    );
}

export default Graph;