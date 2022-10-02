import * as React from 'react';
import { BaseComponent } from '../../../core/component/base';
import Post, { IPostProps } from '../../components/post';
import PostModel from '../../components/post/post.model';

class PostPage extends BaseComponent({
    style: {},
    model: new PostModel(),
})<IPostProps> {
    baseElement = () => <Post model={this.props.model} />;
}

export default PostPage;
