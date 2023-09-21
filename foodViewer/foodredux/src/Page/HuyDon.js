import React from 'react';
import { imgError } from '../StyleCSS.js/StyleCSS';

function HuyDon(props) {
    return (
        <div>
            <h1>Hủy đơn thành công</h1>
            <img style={imgError} src="IMG/icons/huyDon.png"></img>
        </div>
    );
}

export default HuyDon;