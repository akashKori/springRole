import React from 'react';
import Button from '@material-ui/core/Button';

class LoginPopUp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { classes, profileUrl, profileName }  = this.props;
        return(<div className={classes.loginPopUpContainer} > 
            <div style={{paddingBottom:'10px'}} > <img src='displayPic.jpg' style={{ width:'70px',borderRadius:'50%'}}/> </div>
            <div style={{ fontSize:'24px', fontWeight:'bold',paddingBottom:'10px' }}>  { 'Karthik Mandaville' } </div>
            <div style={{paddingBottom:'10px'}}> 
                <a href='https://beta.springrole.com/vanity' style={{ textDecoration:'none' }}>
                <Button
                 className= {classes.signUpBtn}
                 style={{height:'60px', width:'240px'}}
                >
                SIGN UP
                </Button>
                </a>
            </div>
            <div style={
                {
                    color: '#4a4a4a',
                    fontSize: '22px',
                    lineHeight: '20px',
                    marginRight: '8px',
                    paddingBottom:'10px'
                                }
            }> 
                <span> Already a user? </span>
                 <span> <a href='https://beta.springrole.com/login' style={{
                     textDecoration:'none',
                     color:'blue',
                     fontWeight:'bold'
                 }}
                 > Login here </a> </span>
            </div>
        </div>)
    }
}


export default LoginPopUp;