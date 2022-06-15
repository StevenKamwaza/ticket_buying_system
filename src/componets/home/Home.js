import { Avatar, Button, Card, CardMedia, createMuiTheme, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import JssProvider from "react-jss/lib/JssProvider";

const muiBaseTheme = createMuiTheme();

export default function Home(){
    return(
        <div>
           <JssProvider>
            <Card className={"MuiPostcard--01"}>
                    <CardMedia 
                        className={"MuiCardMedia-root"}
                        image={
                        "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80"
                    }
                    >
                        <div className={"MuiTag--ribbon"}>
                            <Typography color={"inherit"} className={"MuiTypography-root"}>
                                Northern
                            </Typography>
                        </div>
                        <Avatar
                            className={"MuiAvatar-root"}
                            src={"http://i.pravatar.cc/300?img=5"}
                        />

                    </CardMedia>
                    <CardContent className={"MuiCardContent-root"}>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        First Snow Storm
                    </Typography>
                    <Typography className={"MuiTypography--subheading"} variant={"caption"}>
                        Snow storm coming in Sommaroy island, Arctic Norway. This is something
                        that you definitely wanna see in your life.
                    </Typography>
                    </CardContent>
                    <CardActions className={"MuiCardActions-root"}>
                    <Typography variant={"caption"}>
                        <Button size ="small">
                            Date of match
                        </Button>
                        <Button size ="small">
                            Buy Now
                        </Button>
                    </Typography>
                    <div>

                    </div>
                    </CardActions>
                </Card>  
            </JssProvider>      
        </div>
    )
}