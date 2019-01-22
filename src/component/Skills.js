import  React from 'react';
import  Button from '@material-ui/core/Button';
import  IconButton from '@material-ui/core/IconButton';
import  PlusIcon from '@material-ui/icons/'

class  Skills extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (

            <div style={{ marginLeft:'10%', paddingTop:'20px' }}>
               <span>
                <span> <Button className={classes.loginBtn}> Endorse </Button> </span>
                <span>
                    <a target={'blank'} href={'https://beta.springrole.com/kartik/verify'} style={{ textDecoration:'none'}}>
                        <Button className={classes.signUpBtn} style={{width:'170px' }}> Verify Experience </Button>
                    </a>
                </span>
              </span>
                <a href={'https://www.startupschool.org/'} target={'blank'}>
                    <img src={'yc-logo.png'} style={{width:'90px'}}/>
                </a>
            </div>

        )
    }
}

export  default  Skills;