import React from 'react'
import NewsCard from './../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js'

export default function NewsCards(props) {
    const classes = useStyles();

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                props.articles.map((article, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard i={i} article={article} />
                    </Grid>
                ))
                }
            </Grid>
        </Grow>
    )
}
