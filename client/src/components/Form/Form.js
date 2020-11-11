import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import useStyles from './styles'

export default function Form() {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    const classes= useStyles();
    const handleSubmit =()=>{

    }
    return (
       <Paper className={classes.paper}>
           <form autoComplete='off' noValidate className={classes.form } onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField 
            name='creator' 
            variant='outlined' 
            label='Creator' 
            fullWidth 
            value={postData.creator}
            onChange={(e)=>setPostData({...postData/*this will allow onchange to keep what was already there */, creator:e.target.value})}/>
            onChange={(e)=>setPostData({...postData/*this will allow onchange to keep what was already there */, creator:e.target.value})}/>
            onChange={(e)=>setPostData({...postData/*this will allow onchange to keep what was already there */, creator:e.target.value})}/>
            onChange={(e)=>setPostData({...postData/*this will allow onchange to keep what was already there */, creator:e.target.value})}/>
           
           </form>
       </Paper>
    )
}
