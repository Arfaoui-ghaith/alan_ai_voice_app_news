import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles.js'

export default function NewsCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
        <CardActionArea href={props.article.url} target="_blank">
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.article.urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary">{props.i + 1}</Typography>
        </CardActions>
      </Card>
    )
}
