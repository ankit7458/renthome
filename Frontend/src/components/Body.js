import React from "react";
import data from '../dummydata'
import Roomcards from './Roomcards/Roomcards'
import Carousel from './carousel'
// import Footer from './Footer'


const Body = (props) => {

    return (
        <div>
        <Carousel />
        <div className="body-c">
            <div className="cards-section">
                <div className="container">
                    <div className="row">
                        {data.map(dataItem => (
                            <div className="col-sm">
                                <Roomcards
                                    id={dataItem.key}
                                    title={dataItem.title}
                                    img={dataItem.img}
                                    price={dataItem.price}
                                    content={dataItem.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
        </div>
    )
}

export default Body