import React from 'react'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { BackTop } from 'antd';
import { blue } from '@material-ui/core/colors';
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
    withStyles
} from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Hospitalisation.css';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


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

function createData(Pathology, Date, Age, Weight, Tall, Examen) {

    return {
        Pathology,
        Date,
        Age,
        Weight,
        Tall,
        Details: [
            { resume: "Comments" }
        ]
    };
}

const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.Pathology}
                </TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">{row.Age}</TableCell>
                <TableCell align="left">{row.Weight}</TableCell>
                <TableCell align="left">{row.Tall}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details
                  </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    {row.Details.map((DetailsRow) => (
                                        <TableRow key={DetailsRow.resume}>
                                            <TableCell component="th" scope="row">
                                                {DetailsRow.resume}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Pathology', '05/01/2019', '1', 7, 65),
    createData('Pathology', '15/02/2019', '2', 10, 80),
    createData('Pathology', '20/03/2019', '3', 13, 92),
    createData('Pathology', '18/04/2019', '4', 15, 101),
    createData('Pathology', '25/06/2020', '5', 18, 118),
];

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

const Hospitalisation = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const notify = () => toast.success(' Add Success!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div>
            <div className='h1-hos'>
                <h1>Hospitalisation</h1>
            </div>
            <ThemeProvider theme={theme}>
                <div className='form-hos'>
                    <FormControl fullWidth className={classes.margin}>

                        <div className='input-hos'>
                            <TextField
                                className={classes.margin}
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                type='Date'
                                required
                            />
                        </div><div className='data-hos'>
                            <div className="align-hos">
                                <div className='input-hos'>
                                    <TextField
                                        className={classes.margin}
                                        label="Weight"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        type='number'
                                        required
                                    />
                                </div>
                                <div className='input-hos'>
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
                            <div className="align-hos">
                                <div className='input-hos'>
                                    <TextField
                                        className={classes.margin}
                                        label="Age"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        type='number'
                                        required
                                    />
                                </div>
                                <div className='input-hos'>
                                    <TextField
                                        className={classes.margin}
                                        label="Pathology"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        type='text'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='area-hos'>
                            <TextField
                                id="mui-theme-provider-outlined-full-width-input"
                                label="Examen"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                required
                            />
                        </div>

                    </FormControl>
                    <div className="btn">
                        <Button variant="contained" onClick={notify} color="primary" type='submit'>
                            Add
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
                <div className="cont-tab">
                    <Paper className={classes.root}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell >Détails</StyledTableCell>
                                        <StyledTableCell >Pathology</StyledTableCell>
                                        <StyledTableCell >Date</StyledTableCell>
                                        <StyledTableCell >Age&nbsp;(yrs)</StyledTableCell>
                                        <StyledTableCell >Weight&nbsp;(kg)</StyledTableCell>
                                        <StyledTableCell >Tall&nbsp;(cm)</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <Row className="StyledTab" key={row.Date} row={row} />
                                    ))}
                                </TableBody>

                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </ThemeProvider>
            <BackTop>
                <div style={style}>UP</div>
            </BackTop>
        </div >
    )
}

export default Hospitalisation