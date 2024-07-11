import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const CardApi = () => {
  return (
    <div>
      <Typography variant='h3'>Cards</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg">

        </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ARNON
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “Push through the pain. ...
        “The strong should aid and protect the weak. ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.pinimg.com/236x/ee/af/33/eeaf332912b0e2fed25e819ef7a16d8d.jpg">

        </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          LAILA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Kawaii (かわいい) Definition: Cute, Adorable.
        Sugoi (すごい) Definition: Amazing, great.
        Baka (ばか) Definition: Idiot, stupid.
        Oniisan (お兄さん) Definition: Older brother.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg">

        </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HARRY
        </Typography>
        <Typography variant="body2" color="text.secondary">
        2013.

      "I want you to be happy. I want you to laugh a lot. I don't know what exactly
       I'll be able to do for you, but I'll always be by your side." 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://w0.peakpx.com/wallpaper/925/558/HD-wallpaper-anime-girl-cute-origins-pink-thumbnail.jpg">

        </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HIBA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "The world isn't perfect. But it's there for us, trying the best it can.
         That's what makes it so damn beautiful." — "Fullmetal Alchemist", 2003.
        This quote suggests that even though the world may not be
         ideal at all times, it is still good because it is constantly trying its 
         best to provide for us. This idea can be applied to various aspects of life, such as 
         relationships, jobs, and personal growth. It reminds us to appreciate the effort put into
          things, even if they are not perfect.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
      </div>
  )
}

export default CardApi
