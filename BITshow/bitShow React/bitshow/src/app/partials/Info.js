import React from "react"
import fragment from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

class Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showImage: "",
            showTitle: "",
            showSummary: "",
            showSeasonCount: 0,
            startEnd: "",
            cast: ""

        }
    }

    componentDidMount() {
        fetch(`http://api.tvmaze.com/shows/${this.props.match.params.showIdForFetch}`)
            .then((response) => {
                return response.json()
            }).then((response) => {
                this.setState({
                    showImage: response.image.original,
                    showTitle: response.name,
                    showSummary: response.summary.replace(/<\/?[^>]+(>|$)/g, "")
                })
            })

        fetch(`http://api.tvmaze.com/shows/${this.props.match.params.showIdForFetch}/seasons`)
            .then((response) => {
                return response.json()
            }).then((response) => {
                this.setState({
                    showSeasonCount: (response.length),
                    startEnd: response.map((element) => {
                        return <li> {element.premiereDate} - {element.endDate} </li>
                    })
                })
            })

        fetch(`http://api.tvmaze.com/shows/${this.props.match.params.showIdForFetch}/cast`)
            .then((response) => {
                return response.json()
            }).then((response) => {
                this.setState({
                    cast: response.map((element) => {
                        return <li> {element.person.name} </li>
                    })
                })
            })
    }

    render() {
        // console.log()
        return (
            <React.Fragment>
            <Header />
                <div className="container">
                    <h1>{this.state.showTitle}</h1>

                    <img src={this.state.showImage} alt="" />
                    <h3> Number Of Seasons: {this.state.showSeasonCount}</h3>
                    <ul>{this.state.startEnd}</ul>
                    <h3>Cast: </h3>
                    <ul>{this.state.cast}</ul>
                    <h3>Sumarry:</h3>
                    <p> {this.state.showSummary}</p>
                </div>
                <Footer />
            </React.Fragment>
        )
    }

}

export default Info
