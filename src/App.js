import React,{Fragment, useEffect,useState} from 'react';
import {Grid,Typography,CircularProgress} from '@material-ui/core'
import './App.css';
import Navbar from './components/Navbar'
import MyCard from './components/MyCard'
import {getMatches} from './api/Api'

function App() {
    const [isLoading,setLoadin] = useState(false)
    const [matches,setMatches] = useState([])
const [error,setError] = useState("")
 const [progress, setProgress] = React.useState(0);

 
    useEffect(()=>{
       
            getMatches().then((data)=>setMatches(data.matches)).catch(err=>setError(err))
    },[])
    return ( 
        <div className="App">
         
<Navbar/>
<Typography variant="h5" style={{marginTop:5,color:"white"}}> Live Scoring App</Typography>
<CircularProgress variant="static"  />
<Grid container>
    <Grid item sm="3"></Grid>
    <Grid item sm="6">
        {
    matches.map((match)=>
      <Fragment key={match.unique_id} >
          {(match.type="Twenty20") ?   <MyCard key={match.unique_id} match={match}/> : ''}
      </Fragment>
    )
}
        </Grid>    
</Grid>

        </div>
    );
}

export default App;