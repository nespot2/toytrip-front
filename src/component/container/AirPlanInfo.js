import React from 'react'


class AirPlanInfo extends React.Component {

    render() {
        return (

            <div className={`ui horizontal segments`}>

                <div className={`ui segment`}>
                    <div className={`airplan-segment`}>
                        <div className={`airplan-item`}>항공사명</div>
                        <div className={`airplan-item`}>출발 시간</div>
                        <div className={`airplan-item`}>도착 시간</div>
                    </div>
                    <div className={`airplan-segment`}>
                        <div className={`airplan-item`}>항공사명</div>
                        <div className={`airplan-item`}>출발 시간</div>
                        <div className={`airplan-item`}>도착 시간</div>
                    </div>
                </div>

                <div className={`ui segment`}>
                    가격정보
               </div>

            </div>
        );
    }

}

export default AirPlanInfo;