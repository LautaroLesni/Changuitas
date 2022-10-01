import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './LandingPage.css'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const pages = ['Home','Register']
const options = [
  {
    title: 'QUIERO CONTRATAR',
    description:[
      'Soluciones 24hs',
      'Seguridad en tu hogar',
      'Profesionales altamente capacitados'
    ],
    buttonText: 'Contratar',
    pages: '/home',
    buttonVariant: 'outlined',
  },
  {
    title: 'SOY PROFESIONAL',
    description:[
      'Trabajo de manera segura',
      'Seguro laboral',
      'Posicionamiento profesional'
    ],
    buttonText: 'Soy profesional',
    buttonVariant: 'outlined',
    pages: '/users/register'
  },
]
const cards = [
  {
    value:3,
    title: 'Albañil',
  },{
    value:4,
    title: 'Gasista'
  },{
    value:5,
    title: 'Plomero'
  }];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="string" align="center">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              La nueva era del oficio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Resolvemos de manera segura
            </Typography>
            <div className='container-options'>
            <Container maxWidth="string" component="main" align="center">
              <Grid container spacing={5} alignItems="center">
                {options.map((tier) => (
                  <Grid
                    item
                    key={tier.title}
                    xs={2}
                    xl={tier.title === "QUIERO CONTRATAR" ? 6 : 2}
                    md={4}
                  >
                    <Card>
                      <CardContent>
                        <ul>
                          {tier.description.map((line) => (
                            <Typography
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              {line}
                            </Typography>
                          ))}
                        </ul>
                      </CardContent>
                      <CardActions>
                        <Button fullWidth variant={tier.buttonVariant} component={Link} href={tier.pages}>
                          {tier.buttonText}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
            </div>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Rating name="read-only" value={card.value} readOnly />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Mas info...</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

