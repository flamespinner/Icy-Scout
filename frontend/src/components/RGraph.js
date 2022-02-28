// Select chartholder
var chartHolder = d3.select("#chartholder");

// Generate some data
var myData = [
	{
		key: "UK",
		values: [
			{ key: "Apples", value: 9 },
			{ key: "Oranges", value: 3 },
			{ key: "Pears", value: 5 },
			{ key: "Bananas", value: 7 }
		]
	},
	{
		key: "France",
		values: [
			{ key: "Apples", value: 5 },
			{ key: "Oranges", value: 4 },
			{ key: "Pears", value: 6 },
			{ key: "Bananas", value: 2 }
		]
	}
];

// Declare the chart component
var myChart = d3.x3d.chart.barChartMultiSeries();

// Attach chart and data to the chartholder
chartHolder
	.datum(myData)
	.call(myChart);