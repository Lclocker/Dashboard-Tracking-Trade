import React from "react";
import { _table } from "./styles";


export function Table({ data, head }: any) {

  const keys = Object.keys(data[0]);
  const indexId = keys.indexOf("id");
  keys.splice(indexId, 1);
  const indexPr = keys.indexOf("inProgress");
  keys.splice(indexPr, 1);

  const Row = ({ line }: any) => {
    return (
      <tr key={line.id}>
        {
          keys.map( key => 
            <td key={key} >
              {line[key]}
            </td>
          )
        }
      </tr>
    )
  }

  return (
    <_table>
      <thead>
        <tr>
          {
            keys.map(key => <th key={key}>{head[key] || key}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((line: any) => <Row line={line} />)
        }
      </tbody>
    </_table>
  )
}