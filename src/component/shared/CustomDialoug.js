import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = {
    dialogPaper: {
        minHeight: '55vh',
        maxHeight: '55vh',
        width:'100%'
    },
};

const DialogTitle = withStyles(theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit * 2,     
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  }))(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles(theme => ({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit,
    },
  }))(MuiDialogActions);


class CustomDialoug extends React.Component {
   constructor(props){
       super(props);                   
       this.handleClose =  this.handleClose.bind(this);
   }   
  
   handleClose(){
       this.props.close();
   }

   
   render(){
    const { classes } = this.props;
       return(<div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open} 
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>            
                <span style={{ fontSize:'20px' }}> { this.props.modalHeader} </span>           
          </DialogTitle>
          <DialogContent>
            { this.props.modalbody}
          </DialogContent>
         {this.props.isHide ? null :  <DialogActions>
            <span>
                <img src='sr_logo_updated.png' style={{ width:'100px' }}/>            
                Create your verified professional profile in a matter of seconds
            </span>
         </DialogActions> }
        </Dialog>

       </div>);
   }
}



export default withStyles(styles)(CustomDialoug); 