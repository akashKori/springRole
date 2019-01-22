import  React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseOutlined from '@material-ui/icons/CloseOutlined'
import Profile from './Profile';
import  Eduction from './Education';
import  Skills from './Skills';
import SkillGrid from './SkillGrid';
import  WorkExp from './WorkExp';


const styles =(theme)=> ({
    root: {
        flexGrow: 1,
        background:'white'
    },
    additionalTool:{
       background:  '#6a819b'
    },
    image:{
      height: '20px',
      paddingLeft : '20%'
    },
    signUpBtn:{
        border: '1px solid blue',
        margin: theme.spacing.unit,
        height:'40px',
        width:'100px',
        background:'blue',
        color:'white',
        fontSize:'14px'
    },
    loginBtn:{
        border: '1px solid blue',
        margin: theme.spacing.unit,
        height:'40px',
        width:'100px',
        background:'white',
        color:'blue',
        fontSize:'14px'

    },
    springRoleBtn:{
        border: '1px solid blue',
        margin: theme.spacing.unit,
        height:'40px',
        width:'160px',
        background:'white',
        color:'blue',
        fontSize:'14px'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    displayImg:{
        width: '200px',
        margin: 'auto',
        height: '200px',
        objectFit: 'cover',
    },
    profileContainer:{
        marginLeft:'20%',
        width:'60%',
        marginRight: '20%',
        paddingTop: '10px',
        background:'white'
    },
    profileTitle:{
        fontSize: '24px',
        margin: '16px 0 5px',
        display: 'inline-block',
        color: '#2b2e34',
        fontWeight: '500',
        lineHeight: 1,
        paddingLeft:'10px'
    },
    designation:{
        fontSize: '14px',
        color: '#393e48',
        fontWeight: 500,
        lineHeight: '20px',
        display: 'inline-block',
        marginRight: '10px',
        paddingLeft:'10px'
      },
    skillSection:{
        fontSize: '14px',
        lineHeight: '27px',
        background: '#f1f1f1',
        borderRadius: '21px',
        display: 'flex',
        alignItems: 'center',
        height:'35px',
        paddingRight: '10px',
        marginRight:'10px',
        marginLeft:'10px'
    },
    ratingColor:{
        width: '31px',
        borderRadius: '50%',
        border: '2px solid #fff',
        height: '31px',
        display: 'inline-block',
        cursor: 'pointer',
        background:'orange'
    },
    link:{
        color: 'grey',
        fontSize: '14px',
        lineHeight: '19px',
        marginLeft: '10px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    skillContainer:{
        marginLeft:'20%',
        paddingLeft:'10px',
        fontSize:'20px',
        background:'white',
        marginTop:'10px',
        marginRight:'20%',
        height:'100px'
    },
    tagLineContainer:{
     marginLeft:'20%',
     paddingLeft:'15%',
     fontSize:'20px',
     background:'white',
     marginTop:'10px',
     marginRight:'20%',
     height:'60px'

    },
    skillProfilePage:{
        padding: '20px 20px 0',
        display: 'inline-block',
        width: '100%',
        marginTop: '2px',
        overflow: 'hidden',
        paddingTop:'20px',
        background:'white',
        height:'450px',
    },
    introEndorse:{
        background: '#ecf5ff',
        padding: '14px 0',
        margin: '-20px -20px 10px',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center'
    },
    skillSectionChild: {
        position:'relative',
        display:'inline-block',
    },
    skillSectionCard:{
        width: '100%',
        borderBottom: '1px solid #d2d2d2',
        textAlign: 'center',
        padding: '0 0 19px',
        margin: '0 0 19px'
    },
    skillName:{
        background: '0 0',
        color: '#4a4a4a',
        fontSize: '18px',
        fontWeight: 400,
        margin: '0 0 8px'
    },
    endorsementPeople:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5px'
    },
    endorsementPeopleSelector:{
        width: '28px',
        position: 'relative',
        padding: 0,
        marginBottom: 0,
        height: '28px',
        display: 'inherit',
        cursor: 'pointer'
    },
    endorsePeopleSpan:{
        cursor: 'pointer',
        fontSize: '10px',
        padding: 0
    },
    workExperienceProfileContent:{
        marginBottom: 0,
        position: 'relative',
        borderBottom: '2px solid #d2d2d2'
    },
    workExpEmpSecVerifyL:{
        background: 'white',
        border: 'none'
    },
    workExpProfile:{
        position: 'relative',
        flex: 1,
        paddingRight: '20px',
        width:'480px'
    },
    workExpRight:{
        textAlign: 'center',
        padding: '0 38px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
    },
    educationContent:{
        display: 'inline-block',
        width: '100%',
        position: 'relative',
        borderBottom: '1px solid #d2d2d2',
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.16)',
        height:'250px'
    },
    loginPopUpContainer:{
        marginLeft:'20%',
        marginRight:'20%',
        textAlign:'center'
    },
    ratingColorTabs:{
        width: '100%',
        margin: '0 0 10px',
        fontSize: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rateLowest:{
       background:  '#f6efed',
       display:'inline-block',
        height:'10px',
        width:'40px'
    },
    rateLow:{
        background:'#ffe1be',
        display:'inline-block',
        height:'10px',
        width:'40px'
    },
    rateMedium:{
        background:'#f7be6c',
        display:'inline-block',
        height:'10px',
        width:'40px'
    },
    rateHight:{
        background:'#ff8100',
        display:'inline-block',
        height:'10px',
        width:'40px'
    },
    rateHighest:{
        background:'#d86d00',
        display:'inline-block',
        height:'10px',
        width:'40px'
    },
    rateLowestBD:{
        background:  '#f6efed',
        display:'inline-block',
         height:'10px',
         width:'40px',
         border:'1px solid black'
     },
     rateLowBD:{
         background:'#ffe1be',
         display:'inline-block',
         height:'10px',
         width:'40px',
         border:'1px solid black'
     },
     rateMediumBD:{
         background:'#f7be6c',
         display:'inline-block',
         height:'10px',
         width:'40px',
         border:'1px solid black'
     },
     rateHightBD:{
         background:'#ff8100',
         display:'inline-block',
         height:'10px',
         width:'40px',
         border:'1px solid black'
     },
     rateHighestBD:{
         background:'#d86d00',
         display:'inline-block',
         height:'10px',
         width:'40px',
         border:'1px solid black'
     },    
});

class HomePage extends  React.Component {
    constructor(props){
        super(props);
        this.state ={
            workExp: [],
            skillList:[],
            educationList:[],
            isShowingInfo: true,            
        }

       this.getWorkExp = this.getWorkExp.bind(this);
       this.getSkills = this.getSkills.bind(this);
       this.getEducation = this.getEducation.bind(this);
       this.closeAdditionalInfo = this.closeAdditionalInfo.bind(this);
      
    }

    componentDidMount() {
        this.getWorkExp('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience');
        this.getSkills('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/profile/skills');
        this.getEducation('https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education');
    }

    getWorkExp(url){
        return fetch(url).
        then(res=>res.json()).
        then(res=>this.setState({workExp: res.work_experiences})).
        catch(errorMsg=> console.log(errorMsg))

    }
    getSkills(url){
        return fetch(url).
        then(res=>res.json()).
        then(res=>this.setState({skillList: res.skills})).
        catch(errorMsg=> console.log(errorMsg))
    }

    getEducation(url){
        return fetch(url).
        then(res=>res.json()).
        then(res=>this.setState({educationList: res.educationList})).
        catch(errorMsg=> console.log(errorMsg))
    }

    closeAdditionalInfo(){
        this.setState({ isShowingInfo: false})
    }

    
    
    render() {
        const {classes} = this.props;
        return(<div>
            <div>
            <AppBar position="static" >
            <Toolbar className={classes.root}>
            <img src='sr_logo_updated.png'
            className={classes.image}
            />
            <span style={{paddingLeft:'40%'}}>
            <a href='https://beta.springrole.com/vanity' target='blank' style={{ textDecoration:'none'}}>
            <Button
            className={classes.signUpBtn}
            color="primary"
            >
                sign up
            </Button>
            </a>
             <a href='https://beta.springrole.com/login' target='blank' style={{ textDecoration:'none'}}>
             <Button
            className={classes.loginBtn}
            color="secondary"
             >
               Login
               </Button>
             </a>                
             </span>
            </Toolbar>
            </AppBar>
            </div>
        { this.state.isShowingInfo?  <div style={{paddingLeft:'20%', paddingRight:'20%', paddingTop:'10px'}}>
            <AppBar position="static" >
              <Toolbar className={classes.additionalTool}>

            Join Kartik Mandaville on SpringRole - A verified professional network powered by the blockchain
        <span style={{paddingLeft:'8%'}}>
        <a href='https://beta.springrole.com/vanity' target='blank' style={{ textDecoration:'none'}}>
        <Button 
        className={classes.springRoleBtn}
        color="secondary"
            >
            Join SpringRole
            </Button>
         </a>
         <a href='https://beta.springrole.com/login' target='blank' style={{ textDecoration:'none'}}>   
        <Button
        className={classes.loginBtn}
        color="secondary"
            >
            Login
            </Button>
         </a>   
           <IconButton onClick={this.closeAdditionalInfo}>
            <CloseOutlined/>
           </IconButton>
            </span>
              </Toolbar>

            </AppBar>
            </div>: null}

           <div className={classes.profileContainer}>
             <Profile {...this.props}/>
           </div>
           <div className={classes.skillContainer}>
            <Skills {...this.props}/>
           </div>
           <div className={classes.tagLineContainer}>
              <div style={{paddingTop:'20px'}}>
               "Building the protocol for professional attestations on the blockchain."
              </div>
           </div>
            <span style={{display:'flex', marginLeft:'20%',marginRight:'20%',paddingTop:'10px'}}>
                <span style={{ paddingRight:'20px'}}>
                 <WorkExp
                     workExp={ this.state.workExp}
                     classes={classes}
                 />
                 <Eduction
                     educationList={this.state.educationList}
                     classes={classes}
                 />
                </span>
                <span className={classes.skillProfilePage}>
              <div className={classes.introEndorse}>
                  <h2>
                   Introducing
                   <br/>
                   Endorsements
                  </h2>
                  <a href="https://springrole.freshdesk.com/support/solutions/articles/43000433785-what-do-the-endorsement-colors-mean-" target="_blank">Learn more</a>
              </div>
               <SkillGrid
                   skillList={ this.state.skillList}
                   classes={classes}
               />
            </span>
            </span>
           
            </div>)
    }

}

export  default withStyles(styles)(HomePage);