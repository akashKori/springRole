import  React from 'react';
import  Button from '@material-ui/core/Button';
import  CustomDialoug from './shared/CustomDialoug';
import  LoginPopUp from './LoginPopUp';

class Profile extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            isMessagePopUpOpen: false,
        }
        this.openMessagePop = this.openMessagePop.bind(this);
        this.closeMessagePopUp = this.closeMessagePopUp.bind(this);
    }
    openMessagePop() {
        this.setState({isMessagePopUpOpen: true })
     }
 
     closeMessagePopUp() {
         this.setState({isMessagePopUpOpen: false })
     }
    render() {
        const { classes } = this.props;
        return (<span style={{display:'flex'}}>
         <span style={{float:'left'}}>
            <img src='displayPic.jpg' className={classes.displayImg}/>
         </span>
          <span style={{display:'inline-grid'}}>
           <div className={classes.profileTitle}>
               Kartik Mandaville
            <img src={'check-green-icon.png'} style={{width:'18px', height:'18px', paddingLeft:'10px'}}/>
           </div>
          <div className={classes.designation}>
               CEO at SpringRole
           </div>
          <div className={classes.designation}>
               India
           </div>
           <div style={{display:'flex',alignItems:'center'}}>
               <div className={classes.skillSection}>
               <span> Solidity</span>
               <ul style={{display:'inline-block', verticalAlign:'bottom'}}>
                  <li className={classes.ratingColor}>
                  </li>
               </ul>
               </div>
               <div className={classes.skillSection}>
                   <span> Entrepreneurship</span>
                <ul style={{display:'inline-block', verticalAlign:'bottom'}}>
                  <li className={classes.ratingColor}>
                  </li>
               </ul>
               </div>
               <div className={classes.skillSection}>
                   <span> Technology</span>
                <ul style={{display:'inline-block', verticalAlign:'bottom'}}>
                  <li className={classes.ratingColor}>
                  </li>
               </ul>
               </div>
           </div>
            <div>
              <a href={'https://beta.springrole.com/kartik'} className={classes.link}>
                  https://beta.springrole.com/kartik
              </a>
            </div>
          </span>
           <span style={{float:'right', marginLeft:'auto'}}>
                <div style={{paddingBottom:'50px'}}>
                  <Button onClick={this.openMessagePop} className={classes.loginBtn} style={{height:'35px'}}>
                      <img src='Message_mobile.png' style={{height:'15px'}}/>
                      Message
                  </Button>
               </div>
               <div> <img  src={'write-to-blockchain-img.png'} style={{height:'52px',paddingLeft:'50px'}} href={'https://explorer.springrole.com/tx/0x8cee6fe189b1a255278527ad971bb22442fde49a4383d5b87b4b7ef520c2cbbf'}/>
                   <p style={{fontSize:'12px',color:'blue' }}> BlockChain Verified</p>
               </div>
           </span>
           { this.state.isMessagePopUpOpen? 
               <CustomDialoug
                close={this.closeMessagePopUp}
                open={this.state.isMessagePopUpOpen}
                modalHeader={'Signup to message'}
                modalbody={<LoginPopUp
                 classes={classes}
                 
                />}
               /> : null
            }
        </span>)
    }
}

export  default Profile;