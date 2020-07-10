import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  tr {
    border-radius: 5px;
  }
  th,
  td {
    text-align: center;
    padding: 8px;
    word-wrap: break-word;
  }
  tr:hover {
    background-color: rgb(224, 252, 11);
  }
`;

export default Table;
