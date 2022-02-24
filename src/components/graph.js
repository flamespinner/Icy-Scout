import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import { ResponsiveContainer, BarChart, PieChart, Pie, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//import { component, chart } from 'd3-x3d';

const useStyles = makeStyles(theme => ({
    card: {
        margin: '10px',
        maxWidth: '500px',
        width: '100%',
    },

	listContainer: {
		alignItems: 'center',
		paddingLeft: '15px',
		paddingRight: '15px'
	},
}))

function graphCard() {
        return(
            <Card className="card">
                <CardHeader title="test" />
                <CardContent>

                </CardContent>
            </Card>
        );
}

export default graphCard;