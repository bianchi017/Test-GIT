import React from 'react';

function CustomTableItem(props) {
    const { items } = props;
    return (
        <tr>
            { items.map((item, index) => <td key={index}>{item}</td>) }
        </tr>
    );
}
export default CustomTableItem;