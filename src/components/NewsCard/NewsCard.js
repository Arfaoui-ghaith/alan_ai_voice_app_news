import React, {useEffect, useState, createRef} from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './styles.js'
import classNames from 'classnames';

export default function NewsCard(props) {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
      if(props.i === props.activeArticle && elRefs[props.activeArticle]){
        scrollToRef(elRefs[props.activeArticle]);
      }
    }, [props.i, props.activeArticle, elRefs])

    return (
        <Card ref={elRefs[props.i]} className={classNames(classes.card, props.activeArticle === props.i ? classes.activeCard : null)}>
        <CardActionArea href={props.article.url} target="_blank">
          <CardMedia
            className={classes.media}
            component="img"
            
            image={props.article.urlToImage || 'https://www.stlucianewsonline.com/wp-content/uploads/2013/11/Latest-News-415x250.jpg'} 
          />
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2"></Typography>
            <Typography variant="body2" color="textSecondary" component="h2">{props.article.source.name}</Typography>
          </div>
          <Typography variant="h5" className={classes.title} gutterBottom>{props.article.title}</Typography>
          <CardContent>
            <Typography color="textSecondary" variant="body2" component="p">
              {props.article.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary">{props.i + 1}</Typography>
        </CardActions>
      </Card>
    )
}
