import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import * as classes from '@src/pages/main/ui/main-page.module.css'
import {a} from "@src/pages/main";
import {connect} from "react-redux";
import {clearData, getPosts, Post} from "@src/entities/post";
import {ClearPostsButton} from "@src/features/clear-posts";

interface MainPageProps {
    posts: Array<Post>;
    loading: boolean;
    someNewField: string;

    getPosts: () => void;
    clearData: () => void;
}

const MainPage = ({posts, loading, someNewField, ...props}: MainPageProps) => {
    useEffect(() => {
        props.getPosts();
    }, [])

    return (
        <div className={classes.container}>
            {someNewField} - should be zxc
            {loading ? <div>loading...</div> : <ClearPostsButton/>}
            core main page {a}
            <Link to="/about">About</Link>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    posts: state.post.data,
    loading: state.post.loading,
    someNewField: state.post.someNewField,
})

const ConnectedMainPage = connect(mapStateToProps, {getPosts, clearData})(MainPage)
export default ConnectedMainPage;
