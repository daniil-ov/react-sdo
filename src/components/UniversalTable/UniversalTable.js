import React from "react";
import {useHistory} from "react-router";


const UniversalTable = ({NameTable, Columns, Rows, path, hrefs}) => {

    const headTable = (Columns.map((name, index) => <th scope={"col"} key={index}>{name}</th>));
    const history = useHistory();

    function rowTable() {
        if (path) {
            return Object.keys(Rows).map((key, index) =>
                <tr key={key} onClick={() => history.push('/' + path + '/' + hrefs[index])}>
                    {Object.keys(Rows[key]).map((name, index) => <td key={index}>{Rows[key][name]}</td>)}
                </tr>
            )
        } else {
            return Object.keys(Rows).map((key, index) =>
                <tr>
                    {Object.keys(Rows[key]).map((name, index) => <td key={index}>{Rows[key][name]}</td>)}
                </tr>
            )
        }
    }

    /*const rowTable = Object.keys(Rows).map((key, index) =>
        <tr key={key} onClick={() => history.push('/' + path + '/' + ref[key])}>
            {Object.keys(Rows[key]).map((name, index) => <td key={index}>{Rows[key][name]}</td>)}
        </tr>
    );
*/

    return (
        <div>
            <h4>{NameTable}</h4>
            <table className="table table-hover" width={'100%'}>
                <thead>
                <tr>
                    {headTable}
                </tr>
                </thead>
                <tbody>
                    {rowTable()}
                </tbody>
            </table>
        </div>


    )
};

export default UniversalTable;