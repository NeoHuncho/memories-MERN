import React from 'react';
import {useSelector} from 'react-redux';
import Post from './post/Post'
import useStyles from './styles'
export default function Posts() {
    const posts  = useSelector(state => state.Posts)
    const classes= useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post/>
        </>
    )
}
