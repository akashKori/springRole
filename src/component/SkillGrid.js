import  React from 'react';
import  CustomDialoug from './shared/CustomDialoug'
import  SkillPopUp from './SkillPopUp';
import  RatingDiv from './shared/RatingDiv';

class SkillGrid extends  React.Component {
    constructor(props) {
        super(props);
        this.state={
            isSkillPopUpOpen: false,
            headerName:'',
            filterSkill:[]
        }
        this.onClickSkill = this.onClickSkill.bind(this); 
        this.closeSkillPopUp =  this.closeSkillPopUp.bind(this); 
    }
    onClickSkill(evt){
      let selectedId = Number.parseInt(evt.target.name);
      let filterObject = this.props.skillList.filter(l=>l.id===selectedId)[0];
      if(filterObject ){
          this.setState({ headerName: filterObject.skill_name, filterSkill: filterObject.endorsed_by.users });
      }
       
      this.setState({ isSkillPopUpOpen : true })
    }
    closeSkillPopUp(){
        this.setState({ isSkillPopUpOpen : false })
    }
    render() {
        const { skillList, classes } = this.props;
        return (
            <div className={classes.skillSectionChild}>

                {skillList && skillList.length >0 ?
                    skillList.map(dataObj=>{
                        return (
                            <div className={classes.skillSectionCard} >
                               <span className={classes.skillName}>
                                {dataObj.skill_name}
                               </span>
                               <RatingDiv
                                classes={classes}
                                rating={dataObj.percentile_group}
                               />
                               <div className={classes.endorsementPeople}>
                                   <div style={{display:'flex',margin:0,flex:0}}> </div>
                                   {
                                       dataObj.endorsed_by && dataObj.endorsed_by.users &&  dataObj.endorsed_by.users.length>0 &&
                                       dataObj.endorsed_by.users.map(userInfo=>{
                                           return (<span className={classes.endorsementPeopleSelector}>
                                           <img 
                                           style={{borderRadius:'50%', width:'30px'}}
                                           src={userInfo.avatar_url}
                                           name={dataObj.id}
                                           onClick={(evt)=>{this.onClickSkill(evt)} }
                                           />
                                           </span>)
                                       })
                                   }
                                   <div style={{
                                       fontSize: '10px',
                                       color: '#4a4a4a',
                                       lineHeight: '15px',
                                       textAlign: 'left',
                                       marginLeft: '11px'
                                   }}>
                                    <span className={classes.endorsePeopleSpan}>
                                       Endorsed by
                                        {
                                            dataObj.endorsed_by && dataObj.endorsed_by.users &&  dataObj.endorsed_by.users.length>0
                                            &&
                                            dataObj.endorsed_by.users.map(userName=>{
                                                return (<a 
                                                    name={dataObj.id}
                                                    onClick={(evt)=>{this.onClickSkill(evt)} }
                                                > {userName['name'].full}</a>)
                                            })
                                        }
                                    </span>
                                   </div>
                               </div>
                            </div>
                        )
                    })
                     :
                   null
                }
               {this.state.isSkillPopUpOpen?
                <CustomDialoug
                  open={this.state.isSkillPopUpOpen}
                  close={this.closeSkillPopUp}
                  modalHeader={this.state.headerName}
                  modalbody={<SkillPopUp
                    filterSkill={this.state.filterSkill}
                    classes={classes}
                  />}
                  isHide={true} 
                />
                :null 
              } 
            </div>
        )
    }

}

export  default  SkillGrid;