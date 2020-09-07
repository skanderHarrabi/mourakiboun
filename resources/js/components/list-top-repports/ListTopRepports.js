import React, {useEffect, useState} from 'react';
import "./list-top-repports.scss";
import RepportCard from "../repport-card/RepportCard";
import {fetchRapports} from "../../actions/rapports-actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {render} from "redux-logger/src/diff";


const ListTopRepports = props => {
    let rap =(
        <div className="grid-list">
            {props.rapports.map(rapport =>
                <RepportCard key={rapport.id} rapport={rapport}/>
            )}
        </div>
    );
    return (
        <div className={"list-top-repports"}>
            <h1>Les rapports</h1>
            {rap}
        </div>
    );
};

export default ListTopRepports;
