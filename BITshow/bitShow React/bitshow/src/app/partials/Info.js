import React from "react"
import fragment from "react-router-dom";

class Info extends React.Component {
    constructor (props){
        super (props)

        this.state = {
            showImage : "",
            showTitle: "",
            showSummary: "",
            showSeason : "",

        }
    }

        componentDidMount(){
            fetch(`http://api.tvmaze.com/shows/${this.props.match.params.showIdForFetch}`)
            .then((response) => {
                return response.json()
            }).then ((response) => {
                this.setState({
                    showImage: response.image.original,
                    showTitle: response.name,
                    showSummary :response.summary.replace(/<\/?[^>]+(>|$)/g, "")
                })
            })
            
            fetch(`http://api.tvmaze.com/shows/${}/seasons`)
        }

        render (){
            // console.log()
            return (
                <React.Fragment>
                <div className="container">
                <h1>{this.state.showTitle}</h1>
            
                <img src={this.state.showImage} alt="" />
                <h3> </h3>
                </div>
                <p> {this.state.showSummary}</p>
            </React.Fragment>
            )
        }

}

export default Info