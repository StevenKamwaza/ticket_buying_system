import { Avatar, Button, Card, CardMedia,CardActionArea, Grid, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useGraphicBtnStyles } from '@mui-treasury/styles/button/graphic';
import Color from 'color'
import stadium from "../asserts/stadium.png"

const useGridStyles =  makeStyles(({ breakpoints }) => ({
    root: {
      [breakpoints.up('md')]: {
        justifyContent: 'center',
      },
    },
  }));

const useStyles = makeStyles(() => ({
    actionArea: {
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    card: ({ color }) => ({
      minWidth: 256,
      borderRadius: 16,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(color)
          .rotate(-12)
          .darken(0.2)
          .fade(0.5)}`,
      },
    }),
    content: ({ color }) => {
      return {
        backgroundColor: color,
        padding: '1rem 1.5rem 1.5rem',
      };
    },
    title: {
      fontFamily: 'Oxygen',
      fontSize: 17,
      color: '#fff',
      textTransform: 'uppercase',
    },
    subtitle: {
      fontFamily: 'Montserrat',
      color: '#fff',
      opacity: 0.87,
      marginTop: '1.5rem',
      fontWeight: 500,
      fontSize: 14,
    },
    buynow: {
      marginTop: '1rem',
      background: 'linear-gradient(to top, #BDC581, #82e7fe)',
      '& > *': {
        textTransform: 'none !important',
      },
    },
  }));

const CustomCard = ({ classes, image, title, subtitle }) => {
    const mediaStyles = useFourThreeCardMediaStyles();
    const btnStyles = useGraphicBtnStyles();
    return (
      <CardActionArea className={classes.actionArea}>
        <Card className={classes.card}>
          <CardMedia 
            classes={mediaStyles} 
            height="140"
            image={image} />
          <CardContent className={classes.content}>
            <Typography className={classes.title} variant={'h3'}>
              {title}
            </Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
            <Button
            className={classes.buynow}
            variant={'contained'}
            color={'primary'}
            disableRipple>
              buy ticket
          </Button>
          </CardContent>
          
        </Card>
      </CardActionArea>
    )
  };
export default function Home(){

    const gridStyles = useGridStyles();
    const styles = useStyles({ color: '#203f52' });
    const styles2 = useStyles({ color: '#2f3640' });
    const styles3 = useStyles({ color: '#16a085' });
    const styles4 = useStyles({ color: '#EAB543' });
  
    return(
        <>
            <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
                <Grid item>
                <CustomCard
                    classes={styles}
                    title={'Northern Region'}
                    subtitle={'Karonga United vs Mzuni FC'}
                    image={"stad.jpg"}
                />
                </Grid>
                <Grid item>
                <CustomCard
                    classes={styles2}
                    title={'Central Region'}
                    subtitle={'Silver Stricker vs Kamuzu Barrack FC'}
                    image={stadium}
                />
                </Grid>
                <Grid item>
                <CustomCard
                    classes={styles3}
                    title={'Southern Region'}
                    subtitle={'Nyasa Bullents vs Mighty Mukuru FC'}
                    image={'stadiu.jpg'}
                />
                </Grid>          
            </Grid>
        </>
    )
}
