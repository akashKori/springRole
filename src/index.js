import  React from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import  HomePage from './component/HomePage';
import ReactDOM from 'react-dom';

const theme = createMuiTheme({
    typography: {
        // In Japanese the characters are usually larger.
        fontSize: 19,
        useNextVariants: true,
    },
})

ReactDOM.render(
<MuiThemeProvider theme={theme}>
    <HomePage style={{background:'lightGrey'}}/>
   </MuiThemeProvider> ,
document.getElementById('app')
);