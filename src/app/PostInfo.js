import React from "react"
import "./App.css";

const PostInfo = () => {

    return (
        <div className="info container ">
            <p className ="white">Back</p>

            <h1 className ="white"> Post Title 1 </h1>

            <h3 className ="white"> Author Name </h3>


            <p className ="white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum amet rerum beatae
            qui dolorum, facilis laboriosam corporis veritatis rem possimus unde culpa sint autem
            doloremque, nulla animi cum voluptatem!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illo harum amet rerum beatae
            qui dolorum, facilis laboriosam corporis veritatis rem possimus unde culpa sint autem
            doloremque, nulla animi cum voluptatem!  </p>

            <hr className="whiteBorder"/>

            <h2 className ="white"> 3 more posts from same author </h2>

            <p className ="white">link1</p>
            <p className ="white">link2</p>
            <p className ="white">link3</p>
        </div>

    )

}




export default PostInfo