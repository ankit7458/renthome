import React from "react";
import data from '../dummydata'
import Roomcards from '../components/roomcards'

const Body = (props) => {
    return (
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
    )
}

export default Body