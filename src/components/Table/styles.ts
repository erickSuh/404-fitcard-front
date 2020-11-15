import styled from 'styled-components';

interface IContainer {
  headers: Array<string>;
}

export const Container = styled.div`
  overflow: auto;
  table {
    width: 100%;
  }
  tbody {
    tr:hover {
      transition: background-color 1s;
      background-color: ${(props) => props.theme.colors.hover};
      cursor: pointer;
    }
  }
  table,
  th,
  td {
    border-collapse: collapse;
  }
  th,
  td {
    padding: 15px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
  tr:nth-child(odd) {
    background-color: #fff;
  }
  th {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
  @media(max-width: ${(props) => props.theme.width.tablet})  {

    /* Force table to not be like tables anymore */
    table, thead, tbody, th, td, tr { 
      display: block; 
    }
    
    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr { 
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    
    tr { border: 1px solid #ccc; }
    
    td { 
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee; 
      position: relative;
      padding-left: 50%; 
    }
    
    td:before { 
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%; 
      padding-right: 10px; 
      white-space: nowrap;
    }
  
    td:nth-of-type(1):before { content: "${(props: IContainer) => props.headers[0]}"}
    td:nth-of-type(2):before { content: "${(props: IContainer) => props.headers[1]}" }
    td:nth-of-type(3):before { content: "${(props: IContainer) => props.headers[2]}"}
    td:nth-of-type(4):before { content: "${(props: IContainer) => props.headers[3]}" }
    td:nth-of-type(5):before { content: "${(props: IContainer) => props.headers[4]}"}
    td:nth-of-type(6):before { content: "${(props: IContainer) => props.headers[5]}" }
    td:nth-of-type(7):before { content: "${(props: IContainer) => props.headers[6]}"}
    td:nth-of-type(8):before { content: "${(props: IContainer) => props.headers[7]}" }
    td:nth-of-type(9):before { content: "${(props: IContainer) => props.headers[8]}"}
    td:nth-of-type(10):before { content: "${(props: IContainer) => props.headers[9]}" }
    td:nth-of-type(11):before { content: "${(props: IContainer) => props.headers[10]}"}
    td:nth-of-type(12):before { content: "${(props: IContainer) => props.headers[11]}" }
    td:nth-of-type(13):before { content: "${(props: IContainer) => props.headers[12]}"}
    td:nth-of-type(14):before { content: "${(props: IContainer) => props.headers[13]}" }
    td:nth-of-type(15):before { content: "${(props: IContainer) => props.headers[14]}"}
    td:nth-of-type(16):before { content: "${(props: IContainer) => props.headers[15]}" }
`;
