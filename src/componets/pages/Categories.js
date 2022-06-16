import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { Button } from '@mui/material';

const useStyles = makeStyles(({ spacing }) => ({
  card: {

    marginTop: "4rem",
    borderRadius: spacing(0.5),
    transition: '0.3s',
    width: '90%',
    marginLeft: "4rem",
    overflow: 'initial',
    background: '#ffffff',
  },
  content: {
    paddingTop: 0,
    textAlign: 'left',
    overflowX: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
}));

let id = 0;
function createData(teams, date, price) {
  id += 1;
  return { id, teams, date, price };
}

const rows = [
  // comment
  createData('Bullets vs Noma', "6/20/2022", 2000),
  createData('Kamuzu Barracks vs Karonga United', "6/20/2022", 2000),
  createData('Mzuni vs  Mponela FC', "6/20/2022", 2000),
  createData('Dedza United FC vs Civo FC', "6/20/2022", 2000),
  createData('Airwing FC vs Moyale Barracks FC', "6/20/2022", 2000),
];

export const Categories = React.memo(function ElevatedHeaderCard() {

  const classes = useStyles();
  const cardHeaderStyles = useContainedCardHeaderStyles();
  const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
  const cardHeaderShadowStyles = useFadedShadowStyles();

  return (
    <Card className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title={'Table of Football Fixtures '}
        subheader={'Select your game to watch'}
      />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Standard Price (MKW)</TableCell>
              <TableCell align="right">  </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.teams}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Button>Buy Now</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});

export default Categories