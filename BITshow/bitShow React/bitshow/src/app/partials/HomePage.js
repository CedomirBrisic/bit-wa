import React from "react"
import fetchShowDataAll from "../../service/fetchShowDataAll"
import ShowCard from "../../entities/createCards"

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            listOfAllShows: []
        }
    }
    componentDidMount() {
        fetchShowDataAll().then((response) => {
            this.setState({
                listOfAllShows: response
            })
            
        })
    }

    render() {
        return (
            <div className ="container">
            <div className= "row">
                {this.state.listOfAllShows.map((show) => {
                   return <ShowCard data={show} key={show.id} />
                })}
                </div>
            </div>
        )
    }   
}

export default HomePage