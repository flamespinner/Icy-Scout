import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
                    <canvas id="cvs" width="650" height="300">
						[No canvas Support]
					</canvas>
                </CardContent>
            </Card>
        );
}

export default graphCard;