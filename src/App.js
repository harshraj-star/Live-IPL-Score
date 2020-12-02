
import React , {useState , useEffect } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Mycard from "./components/Mycard";
import { getMatches } from "./api/Api";
import { Grid, Typography } from '@material-ui/core';




function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
    <Navbar/>
    
    <h1> Free LIVE Updates</h1>
    <Typography color="secondary" variant="h5">WATCH LIVE SCORE</Typography>
    <br/>
                     
    
    <Grid container>
    <Grid sm="3">
    
    </Grid>
    <Grid sm="6">
    {matches.map((match) => (
      <>{(match.type=="Twenty20")? (<Mycard key={match.unique_id} match={match} />): (
        ""
      )}
      </>
              
            ))}
          </Grid>
          
        </Grid>



    
    
    </div>
    
    
  );
}

export default App;
