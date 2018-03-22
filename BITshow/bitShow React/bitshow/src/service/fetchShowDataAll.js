
import Show from "../entities/ShowsDataAll"

 const fetchShowDataAll = () => {

   return fetch("https://api.tvmaze.com/shows")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let showData = data;

       let output = showData.map((element) => {
           return new Show (element.id, element.name, element.image.medium)
        })
        return output.slice(0, 50);
    })
   
}
export default fetchShowDataAll