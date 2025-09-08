import React from 'react'
import {IconButton, Toolbar, Typography,Button, Container ,Card,CardContent} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReviewsIcon from '@mui/icons-material/Reviews';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import myImage from '../images/img1.webp';

function Sub() {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['TRENDING', 'FEATURES', 'REVIEWS', 'DOWNLOADS','THE BEST','PRODUCT FINDER','FORUMS'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <ReviewsIcon /> : <DownloadForOfflineIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
        <Toolbar sx={{backgroundImage:'url(https://image.slidesdocs.com/responsive-images/background/data-technology-blue-abstract-business-glow-powerpoint-background_e667bfafcb__960_540.jpg)',padding:'10px'}}>
             <IconButton color='inherit'>
              <MenuIcon onClick={toggleDrawer(true)} sx={{color:'white'}}/>
            </IconButton> 
            <Typography sx={{flexGrow:1,textTransform:'uppercase',fontSize:'40px',color:'white'}} varient='h1'>BLOGYSPOT</Typography>
        <IconButton color='inherit'>
             <AccountCircleIcon sx={{color:'white'}}/>
             <Typography sx={{color:'white'}}>LOGIN</Typography>
        </IconButton>
        <IconButton color='inherit'>
            < SearchIcon sx={{color:'white'}}/>
        </IconButton>
            </Toolbar> 
        <Divider/>
        <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
        <br/>
        <Container>
            <Button variant='contained' color='primary'>AI</Button>&nbsp;&nbsp;
            <Button variant='contained' color='error'>SOFTWARE</Button>&nbsp;&nbsp;
            <Button variant='contained' color='success'>OPENAI</Button>&nbsp;&nbsp;
            <Button variant='contained' color='secondary'>SAM ALTMAN</Button><br/><br/>
            <Typography variant='h3' sx={{color:'#090979'}}>Backlash over "horrible" GPT-5 forces OpenAI to restore older ChatGPT models, double rate limit</Typography><br/>
            <Typography variant='h5' sx={{color:'gray'}}>GPT-5 is easily jailbroken, too</Typography>
            <Typography sx={{color:'gray'}}>By Rob Thubron August 10, 2025 at 11:48 AM | 8 comments</Typography>
            <br/>
            <Card sx={{
        backgroundImage:'url(https://www.techspot.com/images2/news/bigimage/2025/08/2025-08-09-image-13-j_1100.webp)',
        color:'whitesmoke',
        padding:'150px',
        backgroundPosition:'center'
}}>
        <CardContent>
            <Typography variant='h4'>
            </Typography>
        </CardContent>
     </Card><br/>
     <center>
        <Typography sx={{color:'gray'}}>Serving tech enthusiasts for over 25 years.</Typography>
        <Typography sx={{color:'gray'}}>TechSpot means tech analysis and advice you can trust.</Typography>
     </center><br/>
     <Container>
     <Typography>Facepalm:OpenAI boss Sam Altman said last month that GPT-5 was so fast and powerful that it actually scared him. The CEO compared it to having a "superpower" that offered "legitimate PhD-level expert" information on anything. But within a day of its launch,
         Altman has confirmed the older 4o models are being brought back as so many people dislike GPT-5.</Typography><br/>
         <Typography>OpenAI officially launched GPT-5 on Thursday, with Pro subscribers and enterprise clients getting the more powerful GPT-5 Pro. The company said the new model beats competitors from the likes of Google DeepMind and Anthropic in certain benchmarks, 
            but a lot of people have not shared Altman's enthusiasm.</Typography><br/>
         <Typography>Users have been reporting on sites such as Reddit that GPT-5 has been making the kind of mistakes one wouldn't expect from a PhD-level 
            expert – as the examples below show.</Typography><br/>
    <Typography>Beyond getting stuff wrong, users have been complaining about other elements of GPT-5. A Reddit thread called "GPT5 Is horrible" calls out the short and insufficient replies,
         more obvious AI-styled responses, and it having less "personality."</Typography><br/>
    <Typography sx={{color:'#090979'}}>Related Stories<br/>
    <li>OpenAI releases GPT-5 to the masses in push for AI dominance</li>
    <li>Sam Altman warns AI could wipe out entire job categories, customer support roles most at risk</li></Typography><br/>
    <Typography>As reported by SecurityWeek ,NeuralTrust used its own EchoChamber jailbreak and basic storytelling to trick the model into producing a step-by-step manual for creating a Molotov cocktail.</Typography><br/>
        <img src={myImage} alt='img' height='400px' width='500px'/>
        <br/><br/>
    <Typography>SPLX used a StringJoin Obfuscation Attack, inserting hyphens between every character and wrapping the prompt in a fake encryption challenge.
         This convinced GPT-5 to provide instructions on how to build a basic Improvised Explosive Device (IED). The researchers concluded that "GPT-5's raw model is nearly unusable for enterprise out of the box. Even OpenAI's internal prompt layer leaves significant gaps, especially in Business Alignment." They added that "GPT-4o remains the most robust model under SPLX's red teaming,
         especially when hardened."</Typography><br/>
</Container>
        </Container>
        </div>
  )
}

export default Sub
