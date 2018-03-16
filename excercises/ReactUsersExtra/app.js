const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
            </div>
        </nav>
    )
}

const ListOfUsers = (props) => {


    return (
        <ul class="collection">
            {
                props.data.map(element => {
                    return <User data={element} />
                })
            }

        </ul>


    )
}



const User = (props) => {
    const user = props.data;
    return (
        <li class="collection-item avatar">
            <img src={user.picture.thumbnail} alt="" class="circle" />
            <span class="title">{user.name.first}</span>
            <p> {user.email}<br />
                {user.dob}

            </p>

        </li>

    )

}

const Footer = () => {
    return (

        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>

                </div>
            </div>
            <div class="footer-copyright">

            </div>
        </footer>)
}

const App = (props) => {
    return (
        <div>
            <Header />
            <ListOfUsers data={props.data} />
            <Footer />
        </div>
    )
}


ReactDOM.render(<App data={usersData} />, document.querySelector(".root"));