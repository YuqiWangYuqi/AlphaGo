import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button} from "antd";

class NextPageButton extends Component {
    cityList = (data) => {
        const cityName = [];
        for(var i = 0; i < data.length; i++) {
            cityName.push(data[i].name + ", " + data[i].country);
        }
        return cityName
    }
    
    render() {
        for(let i = 0; i < this.cityList(this.props.data.default).length; i++) {
            if (this.props.city === this.cityList(this.props.data.default)[i]) {
                return (
                    <div className="next-page">
                        <NavLink to={{
                            pathname: '/map/3',
                            details: {
                                city: this.props.city.split(',')[0],
                                coordinates: this.props.coordinates,
                                days: this.props.day
                            }
                        }}>
                            <Button type="primary" icon="thunderbolt">
                                Let's Go
                            </Button>
                        </NavLink>
                    </div>
                );   
            } else {
                return (
                    <div className="next-page">
                        <Button type="primary" icon="thunderbolt">
                            Please enter city
                        </Button>
                    </div>
                );
            }  
        }
        
        
    }
}

export default NextPageButton;