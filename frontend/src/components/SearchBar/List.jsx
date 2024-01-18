import React from "react";
import PropTypes from "prop-types";

function List({ data, input }) {
  const filteredData = (data || []).filter((el) => {
    if (input === "") {
      return true;
    }
    return el.text.toLowerCase().includes(input);
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
List.propTypes = {
  input: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default List;
