import React from 'react'

import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';

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


const GrowthPage = () => {
    const classes = useStyles();

    return (
        <div>
            <div className='h1-gro'>
                <h1>Growth curve</h1>
            </div>
            <ThemeProvider theme={theme}>
                <div className='form-gro'>
                    <FormControl fullWidth className={classes.margin}>
                        <div className='input-exa'>
                            <TextField
                                className={classes.margin}
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                type='Date'
                                required
                            />
                        </div><div className='data-gro'>
                            <div className="align-exa">
                                <div className='input-exa'>
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
                    </FormControl>
                    <div className="btn-insc">
                        <Button variant="contained" color="primary" type='submit'>
                            Apply
            </Button>
                    </div>
                </div>
            </ThemeProvider>
        </div >
    )
}


export default GrowthPage