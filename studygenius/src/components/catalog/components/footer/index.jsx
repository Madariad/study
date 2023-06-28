import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Ваш текст здесь</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">Ваш текст здесь</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
