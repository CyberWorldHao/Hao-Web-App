import React from "react";
import Pagination from "react-bootstrap/Pagination";

let active = 1;
let items = ["Home", "Menu", "Music", "Jobs"];

let paginationItems = items.map((item, index) => (
  <Pagination.Item key={index + 1} active={index + 1 === active}>
    {item}
  </Pagination.Item>
));

const PaginationBasic = () => {
  return (
    <div>
      <Pagination>{paginationItems}</Pagination>
    </div>
  );
};

export default PaginationBasic;
