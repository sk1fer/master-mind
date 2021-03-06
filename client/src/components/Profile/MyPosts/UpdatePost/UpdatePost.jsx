import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updatePost, getPost } from '../../../../redux/actions/actions';
import { setUserPost } from '../../../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom';
import styles from './UpdatePost.module.css';

class UpdatePost extends React.Component {
    state = {
        title: this.props.title,
        text: this.props.text,
        userId: "",
        postId: "",
        errors: {}
    };
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    refreshPost() {
        let postId = this.props.match.params.postId
        getPost(postId)
            .then(data => {
                this.props.setUserPost(data)
            })
    }
    componentDidMount() {
        this.refreshPost()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.text !== this.props.text && prevProps.title !== this.props.title) {
            this.setState({
                title: this.props.title,
                text: this.props.text
            })
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const updatePost = {
            postId: this.props.match.params.postId,
            title: this.state.title,
            userId: this.props.login.user.id,
            text: this.state.text,
        };
        this.props.updatePost(updatePost, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.newPostBlock}>
                    <h2>Update post:</h2>
                    <form noValidate onSubmit={this.onSubmit} className={styles.newPostForm} >
                        <div>
                            <input
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                                error={errors.title}
                                type="text"
                                className={classnames("", {
                                    invalid: errors.title
                                })}
                                placeholder="Title of post" />
                            <div className='errorMessage'>{errors.title}</div>
                        </div>

                        <div>
                            <textarea
                                id="text"
                                name="text"
                                onChange={this.onChange}
                                value={this.state.text}
                                error={errors.text}
                                rows="15"
                                className={classnames("", {
                                    invalid: errors.text
                                })}
                                placeholder="Text of the post" />
                            <div className='errorMessage'>{errors.text}</div>
                        </div>
                        <div className={styles.btnBlock}>
                            <div>
                                <button className={styles.btnAddPost} type="submit">Update Post</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
UpdatePost.propTypes = {
    login: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage,
        login: state.login,
        errors: state.errors,
        title: state.profilePage.post.title,
        text: state.profilePage.post.text
    }
}

export default connect(mapStateToProps, { updatePost, setUserPost })(withRouter(UpdatePost));