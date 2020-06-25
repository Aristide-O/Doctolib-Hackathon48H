import React from 'react';
import {
    makeStyles,
    ThemeProvider,
    createMuiTheme,
    withStyles
} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MainPageGlobal from '../Banniere/MainPageGlobal';
import Navbar from '../Navbar/Navbar';
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

import './VaccinationPage.css';

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

function createData(Date, Vaccine, Lot, eSignature) {

    return {
        Date,
        Vaccine,
        Lot,
        eSignature,
        Details: [
            { resume: "Details" }
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
                    {row.Date}
                </TableCell>
                <TableCell align="left">{row.Vaccine}</TableCell>
                <TableCell align="left">{row.Lot}</TableCell>
                <TableCell align="left">{row.eSignature}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Examen
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
    createData('05/01/2019', 'Influenza', 'e-73567SP', 'Ph Lindsay Yohan'),
    createData('15/02/2019', 'Yelow Fever', 'z-7234TH', 'Ph Jonathan Grant'),
    createData('20/03/2019', 'Varicella ', 'd-7XVCSP', 'Ph Steve Rogers'),
    createData('18/04/2019', 'Rotavirus vaccine', 'e-24567SP', 'Ph Rachid Larziz'),
    createData('25/06/2020', 'Meningococcal vaccine', 'c-63567SP', 'Ph Honoré Bonaventure'),
];

const VaccinationPage = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div>
            <div className='h1-exa'>
                <h1>Vaccination</h1>
            </div>
            <ThemeProvider theme={theme}>
                <div className='form-exa'>
                    <FormControl fullWidth className={classes.margin}>

                        <div className='data-exa'>
                            <div className="align-exa">
                            <div className='input-exa'>
                            <TextField
                                className={classes.margin}
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                type='Date'
                                required
                            />
                        </div>
                        <div className='input-exa'>
                                    <TextField
                                        className={classes.margin}
                                        label="Lot serial number"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        type='text'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="align-exa">
                            <div className='input-exa'>
                                    <TextField
                                        className={classes.margin}
                                        label="Vaccine"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        type='text'
                                        required
                                    />
                                </div>
                                <div className='input-exa'>
                                    <TextField
                                        className={classes.margin}
                                        label="e-signature"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        type='text'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='area-exa'>
                            <TextField
                                id="mui-theme-provider-outlined-full-width-input"
                                label="Comments"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                required
                            />
                        </div>

                    </FormControl>
                    <div className="btn-insc">
                        <Button variant="contained" color="primary" type='submit'>
                            submit
            </Button>
                    </div>
                </div>
                <div className="cont-tab">
                    <Paper className={classes.root}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell >Détails</StyledTableCell>
                                        <StyledTableCell >Date</StyledTableCell>
                                        <StyledTableCell >Vaccine</StyledTableCell>
                                        <StyledTableCell >Lot serial number</StyledTableCell>
                                        <StyledTableCell >e-signature</StyledTableCell>
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
        </div >
    )
}

export default VaccinationPage