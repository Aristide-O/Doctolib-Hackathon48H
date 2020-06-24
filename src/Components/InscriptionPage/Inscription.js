import React from 'react'
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


import './Inscription.css'

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
    },
}));

const Inscription = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className="h1-insc">Inscription</h1>
            <div className="cont-insc">
                <FormControl className={classes.margin}>
                    <ThemeProvider theme={theme}>
                        <div className='input-insc'>
                            <TextField
                                className={classes.margin}
                                label="Lastname"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                required
                            />
                        </div>
                        <div className='input-insc'>
                            <TextField
                                className={classes.margin}
                                label="Firstname"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                required
                            />
                        </div>
                        <div className='input-insc'>
                            <TextField
                                className={classes.margin}
                                label="Email"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                type="Email"
                                required
                            />
                        </div>
                        <div className='input-insc'>
                            <TextField
                                className={classes.margin}
                                label="Password"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                type='password'
                                required
                            />
                        </div>
                    </ThemeProvider>
                </FormControl>
                <div className="btn-insc">
                    <Button variant="contained" color="primary" type='submit'>
                        submit
            </Button>
                </div>
            </div>
        </div>
    )
}

export default Inscription