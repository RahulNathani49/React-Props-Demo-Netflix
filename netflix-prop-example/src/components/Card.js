import React from 'react'
export default function Card(props){
    return(
        <div className="netflixcard">
            <img src={process.env.PUBLIC_URL + props.image} alt="" width="100%" className="movieimage" />
            <div className="cont ">
                <h4>{props.title}</h4>
                <p>On Netflix from {props.date}</p>

                <div className="lowercont overflow-auto">

                    <div className="left-rate float-left">
                        <h6 className="float-left m-0">
                            <i  class="fa fa-star" aria-hidden="true"></i>
                         </h6>
                        <h6 className="float-right px-2 m-0">{props.rating}</h6>
                    </div>    

                    <div className="price float-right">
                        <p className="float-left m-0">Price :</p>
                        <p className="float-right px-2 m-0">$ {props.price}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
