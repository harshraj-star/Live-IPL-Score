import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React , {useState} from "react";
import { getMatchDetail } from "../api/Api";



 const Mycard =({match}) => {

    const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);

    const handleClick=(id)=>{
        getMatchDetail(id).then((data)=> { console.log("MATCH DATA" , data);
        setDetail(data);
        handleOpen();
    }).catch((error)=> console.log(error));
    };
     
         const getMatchCart=()=> {
             return (
             <Card  >
             <CardContent>
             <Grid container justify="center" alignItems="center" spacing={4}>
                 <Grid item >
                     <Typography variant="h5"> {match ["team-1"]}
                     </Typography>
                 </Grid>
                 <Grid item >
                     <img style={{width:85}} src={require("../components/vs.png")}  alt="" />
                 </Grid>
                 <Grid item >
                     <Typography variant="h5"> {match ["team-2"]}
                     </Typography>
                 </Grid>
             </Grid>
             </CardContent>
                 
             
             <br/>
             <CardActions>
             <Grid container justify="center" >
             <Button onClick={()=>{
                 handleClick(match.unique_id)
             }} variant="contained" color="secondary">
                     Show Details
                 </Button>

                 <Button style={{marginLeft : 15}}
                 
                 variant="contained" color="primary">
                    Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                 </Button>
             </Grid>
                 

             </CardActions>
             </Card>
             
                 
             
             )
         };

         const handleClose =()=>{
            setOpen(false);

         }

         const handleOpen =()=>{
            setOpen(true);

         }

         const getDialog = () => (
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography>{detail.stat}</Typography>
                <Typography>
                  Match
                  <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                    {detail.matchStarted ? "Started" : "Still not started"}
                  </span>
                </Typography>
                <Typography>
                  Score
                  <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                    
                    {detail.score}
                  </span>
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
         );

         



return (
    <>
    {getMatchCart()}
    {getDialog()}
    </>
);
         
 }
 export default Mycard;