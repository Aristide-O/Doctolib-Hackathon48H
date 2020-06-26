import React from 'react'

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { BackTop } from 'antd';
import { blue } from '@material-ui/core/colors';
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import { ResponsiveLine } from '@nivo/line'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './GrowthPage.css';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
        margin: {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    container: {
        maxHeight: 440,
    },
}));

const dataWeight =
    [
        {
            "id": "Child",
            "color": "hsl(107, 70%, 50%)",
            "data": [
                {
                    "x": "1",
                    "y": 4
                },
                {
                    "x": "2",
                    "y": 7
                },
                {
                    "x": "3",
                    "y": 10
                },
                {
                    "x": "4",
                    "y": 14
                },
                {
                    "x": "5",
                    "y": 17.5
                },
                {
                    "x": "6",
                    "y": 20
                },
                {
                    "x": "7",
                    "y": 23
                },
                {
                    "x": "8",
                    "y": 27
                },
                {
                    "x": "9",
                    "y": 29
                },
                {
                    "x": "10",
                    "y": 33
                },
                {
                    "x": "11",
                    "y": 38
                },
                {
                    "x": "12",
                    "y": 41
                },
                {
                    "x": "13",
                    "y": ""
                },
                {
                    "x": "14",
                    "y": ""
                },
                {
                    "x": "15",
                    "y": ""
                },
                {
                    "x": "16",
                    "y": ""
                },
                {
                    "x": "17",
                    "y": ""
                },
                {
                    "x": "18",
                    "y": ""
                },
            ]
        },
        {
            "id": "Average",
            "color": "hsl(116, 70%, 50%)",
            "data": [
                {
                    "x": "1",
                    "y": 3
                },
                {
                    "x": "2",
                    "y": 5
                },
                {
                    "x": "3",
                    "y": 8
                },
                {
                    "x": "4",
                    "y": 10
                },
                {
                    "x": "5",
                    "y": 13
                },
                {
                    "x": "6",
                    "y": 16
                },
                {
                    "x": "7",
                    "y": 20
                },
                {
                    "x": "8",
                    "y": 24
                },
                {
                    "x": "9",
                    "y": 28
                },
                {
                    "x": "10",
                    "y": 31
                },
                {
                    "x": "11",
                    "y": 33
                },
                {
                    "x": "12",
                    "y": 36
                },
                {
                    "x": "13",
                    "y": 39
                },
                {
                    "x": "14",
                    "y": 41
                },
                {
                    "x": "15",
                    "y": 44
                },
                {
                    "x": "16",
                    "y": 48
                },
                {
                    "x": "17",
                    "y": 50
                },
                {
                    "x": "18",
                    "y": 54
                },
            ]
        },
    ]
const dataTall =
    [
        {
            "id": "Child",
            "color": "hsl(164, 70%, 50%)",
            "data": [
                {
                    "x": "1",
                    "y": 48
                },
                {
                    "x": "2",
                    "y": 55
                },
                {
                    "x": "3",
                    "y": 65
                },
                {
                    "x": "4",
                    "y": 70
                },
                {
                    "x": "5",
                    "y": 77
                },
                {
                    "x": "6",
                    "y": 85
                },
                {
                    "x": "7",
                    "y": 92
                },
                {
                    "x": "8",
                    "y": 105
                },
                {
                    "x": "9",
                    "y": 113
                },
                {
                    "x": "10",
                    "y": 118
                },
                {
                    "x": "11",
                    "y": 125
                },
                {
                    "x": "12",
                    "y": 132
                },
                {
                    "x": "13",
                    "y": ""
                },
                {
                    "x": "14",
                    "y": ""
                },
                {
                    "x": "15",
                    "y": ""
                },
                {
                    "x": "16",
                    "y": ""
                },
                {
                    "x": "17",
                    "y": ""
                },
                {
                    "x": "18",
                    "y": ""
                },
            ]
        },
        {
            "id": "Average",
            "color": "hsl(116, 70%, 50%)",
            "data": [
                {
                    "x": "1",
                    "y": 45
                },
                {
                    "x": "2",
                    "y": 50
                },
                {
                    "x": "3",
                    "y": 58
                },
                {
                    "x": "4",
                    "y": 63
                },
                {
                    "x": "5",
                    "y": 70
                },
                {
                    "x": "6",
                    "y": 75
                },
                {
                    "x": "7",
                    "y": 82
                },
                {
                    "x": "8",
                    "y": 90
                },
                {
                    "x": "9",
                    "y": 98
                },
                {
                    "x": "10",
                    "y": 108
                },
                {
                    "x": "11",
                    "y": 118
                },
                {
                    "x": "12",
                    "y": 125
                },
                {
                    "x": "13",
                    "y": 132
                },
                {
                    "x": "14",
                    "y": 140
                },
                {
                    "x": "15",
                    "y": 152
                },
                {
                    "x": "16",
                    "y": 160
                },
                {
                    "x": "17",
                    "y": 168
                },
                {
                    "x": "18",
                    "y": 178
                },
            ]
        },
    ]

    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#1088e9',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };

const GrowthPage = () => {
    const classes = useStyles();
    const notify = () => toast.success(' Add Success!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    return (
        <div>
            <div className='h1-gro'>
                <h1>Growth curve</h1>
            </div>
            <ThemeProvider theme={theme}>
                <div className="curve-container">
                    <div>
                        <div className='form-gro'>
                            <FormControl fullWidth className={classes.margin}>
                                <div className='data-gro'>
                                    <div className="align-gro">
                                        <div className='input-gro'>
                                            <h3>Weigth</h3>
                                            <TextField
                                                className={classes.margin}
                                                label="Age"
                                                variant="outlined"
                                                id="mui-theme-provider-outlined-input"
                                                type='number'
                                                required
                                            />
                                        </div>
                                        <div className='input-gro'>
                                            <TextField
                                                className={classes.margin}
                                                label="Weight"
                                                variant="outlined"
                                                id="mui-theme-provider-outlined-input"
                                                type='number'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FormControl>
                            <div className="btn">
                                <Button variant="contained" onClick={notify} color="primary" type='submit'>
                                    Apply
                        </Button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={3000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover />
                            </div>
                        </div>

                        <div style={{ height: "30vw", width: "50vw" }}>
                            <ResponsiveLine
                                data={dataWeight}
                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                xScale={{ type: 'point' }}
                                yScale={{ type: 'linear', min: '0', max: '70', stacked: false, reverse: false }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    orient: 'bottom',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Years',
                                    legendOffset: 36,
                                    legendPosition: 'middle'
                                }}
                                axisLeft={{
                                    orient: 'left',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Weight (kg)',
                                    legendOffset: -40,
                                    legendPosition: 'middle'
                                }}
                                colors={{ scheme: 'nivo' }}
                                pointSize={10}
                                pointColor={{ theme: 'background' }}
                                pointBorderWidth={2}
                                pointBorderColor={{ from: 'serieColor' }}
                                pointLabel="y"
                                pointLabelYOffset={-12}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='form-gro'>
                            <FormControl fullWidth className={classes.margin}>
                                <div className='data-gro'>
                                    <div className="align-gro">
                                        <div className='input-gro'>
                                            <h3>Tall</h3>
                                            <TextField
                                                className={classes.margin}
                                                label="Age"
                                                variant="outlined"
                                                id="mui-theme-provider-outlined-input"
                                                type='number'
                                                required
                                            />
                                        </div>
                                        <div className='input-gro'>
                                            <TextField
                                                className={classes.margin}
                                                label="Tall"
                                                variant="outlined"
                                                id="mui-theme-provider-outlined-input"
                                                type='number'
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FormControl>
                            <div className="btn">
                                <Button variant="contained" onClick={notify} color="primary" type='submit'>
                                    Apply
                        </Button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={3000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover />
                            </div>
                        </div>

                        <div style={{ height: "30vw", width: "50vw" }}>
                            <ResponsiveLine
                                data={dataTall}
                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                xScale={{ type: 'point' }}
                                yScale={{ type: 'linear', min: '0', max: '180', stacked: false, reverse: false }}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    orient: 'bottom',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Years',
                                    legendOffset: 36,
                                    legendPosition: 'middle'
                                }}
                                axisLeft={{
                                    orient: 'left',
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Tall (cm)',
                                    legendOffset: -40,
                                    legendPosition: 'middle'
                                }}
                                colors={{ scheme: 'nivo' }}
                                pointSize={10}
                                pointColor={{ theme: 'background' }}
                                pointBorderWidth={2}
                                pointBorderColor={{ from: 'serieColor' }}
                                pointLabel="y"
                                pointLabelYOffset={-12}
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'bottom-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: 100,
                                        translateY: 0,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1
                                                }
                                            }
                                        ]
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
            <BackTop>
                <div style={style}>UP</div>
            </BackTop>
        </div >
    )
}


export default GrowthPage