import { makeStyles, fade } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';


const drawerWidth = 240;

    const Usestyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    background: { 
      backgroundColor: blueGrey[800], 
      color: 'white'
    },
    iconColor: { color: 'white', fontSize: 25 },
    grow: {
      flexGrow: 1,
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
    },
    appBarShift: {
      [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      [theme.breakpoints.down('sm')]: {
        width: 0,
        backgroundColor: 'white'
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    formPaper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
      },
      marginBottom: theme.spacing(1),
    },
    hospitalFormRoot: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
    containerRoot: {
      textAlign: 'center',
      marginTop: theme.spacing(-7)
    },
    eStepperBackground: {
      backgroundColor: "transparent",
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      "& .MuiStepLabel-label": {
        fontSize: "0.85rem !important",
        fontWeight: "600 !important"
      },
      [theme.breakpoints.down('sm')]: {
        "& .MuiStepLabel-label": {
          display: "none"
        },
      },
    },
    iStepperBackground: {
      backgroundColor: "transparent",
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
      "& .MuiStepLabel-label": {
        fontSize: "0.85rem !important",
        fontWeight: "600 !important"
      },
      [theme.breakpoints.down('sm')]: {
        "& .MuiStepLabel-label": {
          display: "none"
        },
      },
    },
    passwordRoot: {
      "& .MuiOutlinedInput-input": {
        fontWeight: 600,
        fontSize: '1.05rem',
        color: '#1c2a48 !important'
      },
    },
    checkboxLabel: {
      '& .MuiFormControlLabel-label': {
        fontWeight: 500,
        fontSize: '0.80rem',
        textAlign: 'left !important',
        justifyContent: 'flex-start !important',
        marginTop: "0 !important",
      }
    },
    loginCheckboxLabel: {
      '& .MuiFormControlLabel-label': {
        fontWeight: 500,
        fontSize: '0.95rem',
        alignItems: 'center !important',
      }
    },
    headerStepper: {
      width: '100%', 
      flexGrow: 1,
      paddingBottom: theme.spacing(0),
    },
    landingPageStyling: {
      paddingTop: theme.spacing(0),
      flexGrow: 1,
      backgroundColor: "#ffffff",
      minHeight: "100vh",
    },
    headerDescription: {
      width: '100%',
      flexGrow: 1,
      paddingTop: theme.spacing(0),
      backgroundColor: "#d0d6e2"
    },
    loginDescription: {
      width: '100%',
      flexGrow: 1,
      paddingTop: theme.spacing(0),
      backgroundColor: "transparent"
    },
    IAccountContainerRoot: {
      textAlign: 'center',
      marginTop: theme.spacing(3)
    },
    loginContainerRoot: {
      textAlign: 'center',
      marginTop: theme.spacing(3)
    },
    loginBox: {
      padding: theme.spacing(0, 2)
    }
  }));

export default Usestyles;
