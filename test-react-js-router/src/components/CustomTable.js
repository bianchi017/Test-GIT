import React from 'react';
import CustomTableItem from './CustomTableItem';

function CustomTable(props) {
    const { collection, headers } = props;
    return (
        <div className="six columns">
            <table id="tableBooks" className="u-full-width">
                <thead>
                <tr>
                    { headers.map((header, index) => <th key={index}>{header}</th>) }
                </tr>
                </thead>
                <tbody>
                    { collection.map((collectionElement, index) => <CustomTableItem items={collectionElement.toArray()} key={index} />) }
                </tbody>
            </table>
        </div>
    );
}
export default CustomTable;
