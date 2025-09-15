import React from 'react'
import {IconButton, Toolbar, Typography,Button, Container,Grid ,Card,CardContent,CardActions,CardMedia} from '@mui/material';
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
import {Link} from 'react-router-dom';
function Main() {
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
        <br/>
        <center >
        <Typography variant='h5'>Let's Talk</Typography>
        <Typography variant='h3'sx={{fontSize:'100px'}}>The Blogyspot</Typography>
        <Typography variant='h6'>Learn the ins-and-outs with simple how-tos, articles.</Typography></center>
        <br/><br/>
        <Container>
            <Grid container spacing={8}>
        <Grid size={6}>
            <Card sx={{ maxWidth: 500}}>
      <CardMedia
        sx={{ height: 140,backgroundImage:'url(https://www.techspot.com/images2/news/ts3_thumbs/2025/08/2025-08-10-ts3_thumbs-9cd-small.jpg)'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NASA and Google developed an AI medical assistant to keep astronauts healthy on deep-space missions
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The system could have wider healthcare uses<br/>
By Skye Jacobs Today 9:57 AM
        </Typography>
      </CardContent>
      <CardActions>
        <ul style={{listStyle:'none'}}>
            <li><Link to='/Sub'><Button variant='contained'>Read More</Button></Link></li>
        </ul>
      </CardActions>
    </Card>
        </Grid>
        <Grid size={6}>
          <Card sx={{ maxWidth: 500}}>
      <CardMedia
        sx={{ height: 140,backgroundImage:'url(https://www.techspot.com/images2/news/ts3_thumbs/2025/08/2025-08-09-ts3_thumbs-474-small.jpg)'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Backlash over "horrible" GPT-5 forces OpenAI to restore older ChatGPT models, double rate limit
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          GPT-5 is easily jailbroken, too<br/>
By Rob Thubron August 10, 2025 at 11:48 AM 
        </Typography>
      </CardContent>
      <CardActions>
        <ul style={{listStyle:'none'}}>
            <li><Link to='/Sub'><Button variant='contained'>Read More</Button></Link></li>
        </ul>
      </CardActions>
    </Card>
        </Grid>

        <Grid size={6}>
          <Card sx={{ maxWidth:500}}>
      <CardMedia
        sx={{ height: 140,backgroundImage:'url(https://www.techspot.com/images2/news/ts3_thumbs/2015/04/2015-04-03-ts3_thumbsc09-small.png)'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Microsoft to retire popular Lens app, fold scanning into Copilot
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          The decade-old document scanner will shut down in end 2025<br/>
By Skye Jacobs August 9, 2025 at 11:06 AM
        </Typography>
      </CardContent>
      <CardActions>
        <ul style={{listStyle:'none'}}>
            <li><Link to='/Sub'><Button variant='contained'>Read More</Button></Link></li>
        </ul>
      </CardActions>
    </Card>
        </Grid>
        <Grid size={6}>
          <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 140,backgroundImage:'url(https://www.techspot.com/images2/news/ts3_thumbs/2021/02/2021-02-26-ts3_thumbs-f06-small.jpg)'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AOL to discontinue dial-up internet service after 34 years
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Yes, it's still a thing<br/>
By Rob Thubron Today 8:03 AM
        </Typography>
      </CardContent>
      <CardActions>
        <ul style={{listStyle:'none'}}>
            <li><Link to='/Sub'><Button variant='contained'>Read More</Button></Link></li>
        </ul>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
      <br/>
      <br/>
        </Container>
        </div>
  )
}

export default Main
