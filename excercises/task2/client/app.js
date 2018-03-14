import { post } from "./post.js";

$inputPlace = $(".row");


// const inputFunction = () => {

// }

let card = (post) => {
    return `
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${post.title}</span>
          <p>${[post].intro}</p>
        </div>
        
      </div>
    </div>
  </div>
  `
}


const inputFunction = () => {
    fetch("http://127.0.0.1:3000/")
        .then(function (response) {
          console.log(response);
          
            return response.json();
        })
        .then(function (jsonResponse) {
            jsonResponse.forEach(post => {
         console.log(post)
         
                // let post = new Post(post.id, post.title, post.intro)
                // $card(post)

                // $inputPlace.append($card);

            });
        })

}

export default inputFunction;