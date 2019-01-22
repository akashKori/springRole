import React from  'react';


class Education extends  React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const { classes, educationList } = this.props;
        return (<div className={classes.educationContent}>
            {
                educationList&& educationList.length>0 &&
                educationList.map(educationObj=>{
                    return(
                        <div style={{display:'flex',alignItems:'flexStart',border:'1px solid lightGray'}}>
                           <div style={{width:'68px',height:'68px',marginRight:'20px'}}>
                               <span>
                                   <img src={'uni-icon.png'} style={{display:'block',height:'68px',padding:'20px'}}/>
                               </span>
                           </div>
                            <div style={{
                                margin: '0px',
                                padding: 0,
                                fontSize: '100%',
                                font: 'inherit',
                                verticalAlign: 'baseline',
                                fontFamily: 'Roboto,sans-serif',
                                paddingLeft:'80px',
                                paddingTop:'20px',
                                border:0
                            }}>
                                <div>
                                    {educationObj.institution_name}
                                </div>
                                <div>
                                    {educationObj.course} - {educationObj.department}
                                </div>
                                <div>
                                    {educationObj.location}
                                </div>
                                <div>
                                    {educationObj.start_date} - {educationObj.end_date}
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>)
    }
}

export  default  Education;