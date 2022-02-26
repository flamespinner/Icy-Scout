//import  './RGraph.bar';
//import './RGraph.common.core';

function graph() {
    // Some default variables. These margins are not all hard-and-fast
    // values - some are increased and some are reduced for each chart.
   /* marginLeft    = 60;
    marginRight   = 25;
    marginTop     = 45;
    marginBottom  = 65;
    marginInner   = 20;
    
    // This is the same for each chart
    yaxisScaleMax = 35;

    // How many animation frames there are
    frames = 20;
    
    // Used later
    state = {}

    // Here are the three datasets for the chart
    data = [
        [5,16,10,12,13,15,16],
        [20,21,24,23,18,19,20],
        [35,34,32,28,26,35,34]
    ];


    // The colors for the bars
    colors = [
        'Gradient(#696:#0f0:#0f0)',
        'Gradient(#966:#f00:#f00)',
        'Gradient(#669:blue:blue)'
    ];
    
    // And the X-axis labels for the chart
    xaxisLabels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];








    // Draw the first bar chart
    function draw1 ()
    {
        state.bar1 = new RGraph.Bar({
            id: 'cvs',
            data: data[2],
            options: {
                
                // These few properties set the chart to be a 3D Bar chart and turn off
                // the 3D axes that are drawn.
                variant: '3d',
                variantThreedYaxis: false,
                variantThreedXaxis: false,

                colorsStroke: 'rgba(0,0,0,0)',
                colors: [colors[2]],

                // The background grid is only enabled on this chart - the
                // bar chart at the back
                backgroundGridColor: '#ccc',
                backgroundGridHlinesCount: 5,
                backgroundGridVlinesCount: 14,
                
                // Set the margins based on the values that are defined above
                marginBottom: marginBottom,
                marginTop: marginTop,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginInner: marginInner,

                yaxisScaleMax: yaxisScaleMax,
                xaxis: false,
                yaxis: false,
                yaxisScale: false
            }
            
            // Use the grow() effect. The function that gets called at the
            // end of the effect (the draw2() function) starts drawing/animating
            // the second set of bars.
        }).grow({frames: frames}, draw2);
    }





    // This function draws the second bar chart. It's called when the grow()
    // effect of the first bar chart completes.
    function draw2 ()
    {
        state.bar2 = new RGraph.Bar({
            id: 'cvs',
            data: data[1],
            options: {
                // Stipulate 3d but no 3D axes
                variant: '3d',
                variantThreedYaxis: false,
                variantThreedXaxis: false,

                colorsStroke: 'rgba(0,0,0,0)',
                colors: [colors[1]],

                // No background grid or X/Y labels for the second and third charts
                backgroundGrid: false,
                yaxisLabels: false,
                xaxisLabels: [],

                // The default margins are increased on one side and reduced on
                // the other in order to move the chart to the left a little and
                // enhance the perception of depth.
                marginBottom: marginBottom - 10,
                marginTop: marginTop + 10,
                marginLeft: marginLeft - 25,
                marginRight: marginRight + 25,
                marginInner: marginInner,

                yaxisScaleMax: yaxisScaleMax,
                xaxis: false,
                yaxis: false,
                yaxisScale: false
            }
        
        // Use the grow() effect again and when it's done the draw3() function
        // is called.
        }).grow({frames: frames}, draw3);
    }





    // This function draws the third bar chart
    function draw3 ()
    {
        state.bar3 = new RGraph.Bar({
            id: 'cvs',
            data: data[0],
            options: {

                // Set the chart to be 3D but without any axes
                variant: '3d',
                variantThreedYaxis: false,
                variantThreedXaxis: false,

                colorsStroke: 'rgba(0,0,0,0)',
                colors: [colors[0]],
                
                // Now that we're drawing the chart that's "at the front" the X-axis labels can be drawn
                xaxisLabels: xaxisLabels,

                backgroundGrid: false,
                
                // Add and subtract from the default margins in order to move the
                // chart to the left
                marginTop: marginTop + 20,
                marginBottom: marginBottom - 20,
                marginLeft: marginLeft - 40,
                marginRight: marginRight + 50,
                marginInner: marginInner,

                yaxisScaleMax: yaxisScaleMax,
                xaxis: false,
                yaxis: false,
                yaxisScale: false
            }
        // Use the grow() effect to show the chart but this time with no callback
        // function because there's no subsequent chart to draw.
        //
        // The responsive function is new as of October 2019 and allows you to specify
        // different settings for different screen sizes. Remember that you may need
        //to add settings to the chart again if you remove them for some sizes.
        }).grow({frames: frames});

        state.bar3.responsive([
            {maxWidth: null,width: 650,height: 300,options: {xaxisLabels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],textSize: 12,marginInner: marginInner},callback: function (){state.bar1.set('marginInner', 20);state.bar2.set('marginInner', 20);setTimeout(function (){state.yaxisObj.x = 635;state.yaxisObj.set('textSize', 12);RGraph.redraw();}, 250);}},
            {maxWidth: 900,width: 450,height: 200,options: {xaxisLabels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],textSize: 8,marginInner: 10}, callback:function (){state.bar1.set('marginInner', 10);state.bar2.set('marginInner', 10);state.yaxisObj.x = 435;state.yaxisObj.set('textSize', 8);RGraph.redraw();}}
        ]);
    }



    // Initiate the drawing of the first chart. The second and then the
    // third charts are initiated by the prior charts animation callback
    // function. This has to be placed before the Y-axis.
    draw1();




    // This drawing API Y-axis is used to show the Y-axis labels on the
    // right-hand-side - though the actual axis is not shown - just the labels.
    state.yaxisObj = new RGraph.Drawing.YAxis({
        id: 'cvs',
        x: 635,
        options: {
            yaxisColor:   'rgba(0,0,0,0)',
            textColor:    'black',
            marginTop:    40,
            marginBottom: 70,
            yaxisScaleMax: 35,
            yaxisPosition: 'right'
        }
    }).draw();*/
}

export default graph;