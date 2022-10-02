import * as React from 'react';
import PostModel from './post.model';
import { Loading } from '../../../template/component/Loading';
import { Posts, PostError } from './Posts';
// import { apiResult } from '../../../core/redux/slice';

export interface IPostProps {
    model: PostModel;
}

const Post: React.FunctionComponent<IPostProps> = (props) => {
    const [post, setPost] = React.useState<any>(null);
    const { model } = props;

    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        model.posts;

    let content;

    // apiResult().then((res: any) =>
    //     res[0].status === 'fulfilled' ? setPost(res[0].data) : null
    // );
    // if (post) {
    //     return post.map((item: any) => <p>{item.description}</p>);
    // }

    if (isLoading) {
        content = <Loading isLoading={true} />;
    } else if (isSuccess) {
        if (Array.isArray(data)) {
            content = <Posts data={data} isFetching={isFetching} />;
        }
    } else if (isError) {
        content = <PostError error={error} />;
    }

    return (
        <>
            <h1>Post List:</h1>
            {content}
        </>
    );
};

export default Post;
