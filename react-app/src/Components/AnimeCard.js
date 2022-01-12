import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from "@mui/material";

import cardArt from '../images/demonslayerlistart.jpeg';

export default AnimeCard;
function AnimeCard({cardName}){

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="../images/demonslayerlistart.jpeg"
            />
            <Typography gutterBottom variant="h5">
                {cardName}
            </Typography>
        </Card>
    );
}