import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const images = [
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Дизайн',
    width: '22%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Разработка',
    width: '22%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Маркетинг',
    width: '24%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Личный рост',
    width: '22%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'ИТ и ПО',
    width: '22%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Бизнес',
    width: '24%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Фотография',
    width: '22%',
  },
  {
    url: '../../../../public/img/testimg.jpg',
    title: 'Музыка',
    width: '22%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <>
    <Paper elevation={6} sx={{ boxShadow: '1px 1px 20px rgb(19 123 211)', padding: '24px'}}>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <Typography variant="h2" color="primary" padding={'5, 5'}>популярный котегорий</Typography>

      </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: 'center' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            margin: '4px'
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    </Paper>
    </>
  );
}







// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import Paper from '@mui/material/Paper';
// import Box from "@mui/material/Box";
// import { makeStyles } from '@mui/styles';



// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';

// import { CardActionArea } from '@mui/material';


// const useStyles = makeStyles((theme) => ({
//     current: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       padding: '20px'
//     //   alignItems: 'center'
//     },
//    box: {
//       width: '200px',
//       height: '250px',
//       border: '1px solid black',
//     //   borderRadius: '50px',
//       padding: '20px',
//     //   justifyContent: 'center'

//    }
//   }));
// function kotoegry() {
//     const data = 
//     [
//         {
//             id: 1,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Дизайн'
//         },
//         {
//             id: 2,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Разработка'
//         },
//         {
//             id: 3,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Маркетинг'
//         },
//         {
//             id: 4,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'ИТ и ПО'
//         },
//         {
//             id: 5,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Личный рост'
//         },
//         {
//             id: 6,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Бизнес'
//         },
//         {
//             id: 7,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Фотография'
//         },
//         {
//             id: 8,
//             img: '../../../../public/img/testimg.jpg',
//             text: 'Музыка'
//         }
//     ]

//     const classes = useStyles();
//     return (
//         <>
//          <Paper elevation={9}>
//          <div className={classes.current}>
//                     <Typography variant="h2" color="primary" paddingBottom={5}>популярный котегорий</Typography>
//                     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
//                         {data.map((dat)  => (

//             <Grid item key={dat.id} xs={12} sm={4} md={3} style={{display: 'flex', justifyContent: 'center'}}>
// <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={dat.img}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {dat.text}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//                     {/* <div className={classes.box}>
//                     <img src={dat.img} width="180px" alt="photo" />
//                     <Typography variant="h3" color="primary" paddingTop='20px'>{dat.text}</Typography>
//                     </div> */}
                
//             </Grid>
//             ))}
//                         </Grid>
//          </div>
//          </Paper>
//         </>
//     )
// }

// export default kotoegry