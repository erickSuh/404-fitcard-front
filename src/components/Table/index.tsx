/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';

import { Container } from './styles';
import { Params, Header as TableHeader } from './types';

const Table: React.FC<Params> = ({ headers = [], list = [], onClick, style, children }) => {
  const valueList = useMemo(() => {
    const keyHeader = headers.map((header: TableHeader) => header.key);
    if (!list[0]) return [];

    const newList = list.map((obj: any) => {
      return keyHeader.map((key: string) => obj[key]);
    });
    return newList;
  }, [list]);

  const idxId = useMemo(() => headers.findIndex((header: TableHeader) => header.key === 'id'), [headers]);
  const lblHeaders = useMemo(() => headers.map((header: TableHeader) => header.label), [headers]);

  return (
    <Container headers={lblHeaders} style={style}>
      <table>
        <thead>
          <tr>
            {headers.map((header: TableHeader) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {valueList.map((row: any) => (
            <tr id={row[idxId]} onClick={onClick} key={row}>
              {row.map((val: string, idx: number) => (
                <td key={val + idx.toString()}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {children}
    </Container>
  );
};

export default Table;
