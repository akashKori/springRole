import React from 'react';


class SkillPopUp extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { filterSkill, classes } = this.props;
        return(
        <div>
          <div>  People who have endorsed Kartik </div>
          <div>
               { 
                   filterSkill && filterSkill.length>0 
                   && filterSkill.map(filterObject=>{
                       return(<span style={{ display:'flex',paddingTop:'10px',borderBottom:'1px solid gray'}}> 
                            <span style={{ float:'left', paddingRight:'10px'}}>
                             <img src={filterObject.avatar_url} style={{ width:'60px', borderRadius:'50%'}}/>
                            </span>
                            <span>
                              <div style={{paddingBottom:'10px'}}> {filterObject.name.full } </div>
                              <div> { filterObject.profile_headline &&  filterObject.profile_headline.text} { filterObject.profile_headline &&  filterObject.profile_headline.company} { filterObject.profile_headline &&  filterObject.profile_headline.location_name} </div>
                            </span> 
                           </span>)
                   })
                }
          </div>  
        </div>
        )
    }
}

export default SkillPopUp;