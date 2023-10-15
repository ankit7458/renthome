import React from "react";



function Roomcards(props) {
    return(
        <div className="card" >
             <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="Image not found" />
             <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">{props.content}</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
         </div>
    )
}

export default Roomcards