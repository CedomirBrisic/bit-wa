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
        <div className="row">
            {
                props.data.map(element => {
                    return <User data={element} />
                })
            }

        </div>


    )
}

const dateOfBirth = (dateInput) => {
    const date = new Date(dateInput);
    const fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dd = date.getDate();
    let mm = date.getMonth();
    let yy = date.getFullYear();
    return `${fullMonth[mm]} - ${dd} - ${yy}`
}


const Dob = (props) => {


    return (
        dateOfBirth(props.data)
    )
}

const asterixMail = (inputMail) => {
    let output = inputMail.split("");
    output.splice(3, 5, "*", "*", "*", "*", "*");
    return output;
}

const MailHidden = (props) => {
    return (
        asterixMail(props.data)
    )
}

const User = (props) => {
    const user = props.data;
    return (


        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={user.picture.large} />
                    <span className="card-title">{user.name.first}</span>
                </div>
                <div className="card-content">
                    <p>Email: <MailHidden data={user.email} /> <br />
                        Date of birth: <Dob data={user.dob} /> </p>
                </div>
            </div>
        </div>

    )

}

const Footer = () => {
    return (

        <footer className="page-footer">
            <div className="row">
                <div className="col l6 s12">
                    <p className="grey-text text-lighten-4">© 2018 Copyright 2018</p>
                </div>
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