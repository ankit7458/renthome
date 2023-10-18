import React from "react";



function Roomcards(props) {
    return(
        <div className="card card-c" >
             <img src={props.img} className="card-img-top" alt="Image not found" />
             <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">{props.content}</p>
                 <a href="#" className="btn btn-primary">Check detail</a>
             </div>
         </div>
    )
}

export default Roomcards