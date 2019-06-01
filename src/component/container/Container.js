import React from 'react';
import AirPlanInfo from './AirPlanInfo';


import {go, L, takeAll} from "../../fxjs/fx";

class Container extends React.Component {

    render() {

        const aprPlanInfoList = go(
            L.range(10),
            L.map(_ => <AirPlanInfo/>),
            takeAll
        )

        return (
            <div className="container">
                {aprPlanInfoList}
            </div>
        );
    }


}

export default Container;