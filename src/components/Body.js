import React from "react";
import data from '../dummydata'
import Roomcards from './Roomcards/Roomcards'
import Footer from '../components/Footer'


const Body = (props) => {

    return (
        <div className="body-c">
            <div className="cards-section">
                <div className="container">
                    <div className="row">
                        {data.map(dataItem => (
                            <div className="col-sm">
                                <Roomcards
                                    key={dataItem.key}
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
            <Footer />
        </div>
    )
}

export default Body