import React, {Component} from 'react';


class AboutUs extends Component {
    render() {
        return (
            <div style={{
                marginTop: 50,
                marginLeft: 200,
            }}>
                <h1>
                    Our Team
                </h1>
                <p>
                    <div>
                        <p>
                            <a href='https://github.com/gwd0715'>
                                Chris
                            </a>
                        </p>
                        <p>
                            <a href='https://www.linkedin.com/in/baobaollf'>
                                Linfeng Li
                            </a>
                        </p>
                        <p>
                            <a href='https://github.com/peteryang11'>
                                Qi Yang
                            </a>
                        </p>
                        <p>
                            <a href='https://github.com/ccait'>
                                Tianqi Cai
                            </a>
                        </p>

                        <p>
                            <a href='https://www.linkedin.com/in/yuqiwangyuqi'>
                                Yuqi Wang
                            </a>
                        </p>
                        <p>
                            <a href=''>
                                Yuqi Sha
                            </a>
                        </p>

                    </div>
                </p>
            </div>
        );
    }
}

export default AboutUs;