import React from 'react';

const RatingDiv =(props)=>{
   
   const {classes } = props;
   const rating= Number.parseInt(props.rating);

  return(<ul className={classes.ratingColorTabs}> 
    <li>
        <span
         className={ rating===1?classes.rateLowestBD: classes.rateLowest}        
         > </span>
    </li>
    <li>
        <span 
        className={rating===2?classes.rateLowBD: classes.rateLow}
        
        > </span>
    </li>
    <li>
        <span        
        className={rating===3?classes.rateMediumBD: classes.rateMedium}
        > </span>
    </li>
    <li>
        <span                 
        className={rating===4?classes.rateHightBD: classes.rateHight}
         > </span>
    </li>
    <li>
        <span         
        className={rating===5?classes.rateHighestBD: classes.rateHighest}
        > </span>
    </li>    
  </ul>);

}

export default RatingDiv;