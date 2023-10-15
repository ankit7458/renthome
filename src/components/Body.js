import React from "react";
import data from '../dummydata'
import Roomcards from '../components/roomcards'
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