import  { useState } from 'react'
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Navbar from './Navbar';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const App = () => {
   const [value, setValue] = useState(2)

  const BoxNew =  styled(Box)({
    backgroundColor:"green",
    color:"white",
    width:"400px",
    height:"500px",
    fontSize:'50px',
    margin:"auto"
   })

  return (
    <div>
      <BrowserRouter>
            <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>

      <BoxNew>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quae quo perferendis harum impedit mollitia similique aut vero voluptate sapiente?
      </BoxNew>
      <Box>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde vero qui dolore? Deleniti nemo ut veniam natus quas, unde quis!
      </Box>

      {/* <Typography variant='h1'>Hello Devanshu sir</Typography>
      <h1>MUI 🎇</h1>
      <Button endIcon={<AdbIcon color='error' />} variant='contained' color='success' size='large'>Start</Button>
      <IconButton>
        <Fingerprint color='primary'  />
      </IconButton>
      <ButtonGroup orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Checkbox color='error' />
       <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
    
      />
          <Switch color='warning'/>
          <TextField label="Devanshusir"/>
          <Avatar sx={{backgroundColor:"orange" , color:"black"}} variant='square' >H</Avatar>

          <Badge badgeContent={8}  >
            <AdbIcon/>
          </Badge> */}

    </div>
  )
}

export default App
