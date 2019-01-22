import  React from 'react';

class  WorkExp extends  React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const { classes, workExp } = this.props;
        return (
            <div className={classes.workExpEmpSecVerifyL}>
                {workExp && workExp.length>0 &&
                 workExp.map(workExpObj=>{ return(
                    <div>
                     <div style={{border:'1px solid gray'}}>
                    <div style={{
                    display: 'flex',
                    flex: 1,
                    borderRight: '2px solid #d2d2d2',
                    padding: '20px 0 0 28px'
                   }}>
                        <div style={{
                         borderRadius: '2px'
                       }}>
                            <a href={workExpObj.company.url}>
                              <img src={workExpObj.company.logo_url} style={{width:'70px',paddingTop:'20px',paddingRight:'10px'}}/>
                            </a>
                        </div>
                        <div className={classes.workExpProfile}>
                          <div>
                            <h3>{ workExpObj.designation }</h3>
                          </div>
                          <div>
                              <a href={workExpObj.company.url}> { workExpObj.company.name} </a>
                              <h5> {workExpObj.duration} </h5>
                          </div>

                        </div>
                        <div style={{width:'157px'}}>
                            <div className={classes.workExpRight}>
                                <div>
                                    <a href={`https://beta.springrole.com/kartik/work-experience/${workExpObj.uuid}/verifiers`} target={'blank'}>
                                    <span
                                        style={{
                                            height: '16px',
                                            display: 'inline-block'
                                        }}
                                    >
                                        <img src={workExpObj.status ? 'l1-verified.png' :'l1-verification-Pending.png' } />
                                    </span>
                                    </a>
                                    <div style={{fontSize:'12px',color:'gray',paddingTop:'4px',paddingBottom:'4px'}}> { workExpObj.status ? 'Peer Verified': 'Peer verification pending'}</div>
                                </div>
                                <div>
                                    <a href={`https://beta.springrole.com/kartik/work-experience/${workExpObj.uuid}/verifiers`} target={'blank'}>
                                    <span
                                        style={{
                                            height: '16px',
                                            width: '16px',
                                            display: 'inline-block'
                                        }}
                                    >
                                        <img style={{width:'16px'}}
                                             src={workExpObj.claimed_by==='company' ? 'green-check-mark.png' :'grey-check.png' } />
                                    </span>
                                    </a>
                                    <div style={{fontSize:'12px',color:'gray',paddingTop:'4px',paddingBottom:'4px'}}> {workExpObj.claimed_by==='company'?'Company verified':'Company verification pending'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                        {workExpObj.description ?  <div style={{height:'54',padding:'20px',border:'1px solid gray'}}>
                            {workExpObj.description}
                        </div> :null}
                  </div>
                 )})}
            </div>
        )
    }

}

export  default  WorkExp;