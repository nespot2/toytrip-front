import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="logo">toytrip</div>
                <div className="item-group">
                    <div className="item"><a href="/">항공권 조회</a></div>
                    <div className="item"><a href="/">항공권 조회</a></div>
                </div>
                <div className="search-group">
                    <div className="search">
                        <div className="ui input">
                            <input type="text" placeholder="Search..."/>
                        </div>
                    </div>
                    <div className="search item-search">
                        <button className="ui secondary button">Okay</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;