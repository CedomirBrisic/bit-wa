
const NavigationHeader = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
            </div>
        </nav>

    )
}


const PostList = (props) => {
    return (
        <div>
            {
                props.posts.map(postElement => {
                    return <Post post={postElement} />
                })
            }
        </div>
    )
}


const Post = (props) => {
    const myPost = props.post;

    return (
        <div class="row">
            <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{props.post.title}</span>
                        <p>{props.post.body}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}



const App = (props) => {
    return (
        <div>
            <NavigationHeader />
            <PostList posts={props.data} />
        </div>

    )


}

ReactDOM.render(<App data={posts} />, document.querySelector(".root"));