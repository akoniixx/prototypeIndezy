import React, { Component } from 'react';
//import connect from 'react-redux';
import styled from 'styled-components';
const Text = styled.span`
font-size: 30px;
color: ${({ color }) => color};
`;
class Main extends Component {
    render() {
        const x = 1213131;
        var myStyle={
            fontSize:200,
            color:'#FF0000'
        }
        return (
            <div>
                <Text>{`value = ${x}`}</Text>
                <div style ={myStyle}>test</div>
            </div>
        );
    }
}

export default Main;