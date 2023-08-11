import React from "react";

const Container = ({ element, children }) => {
  const titleNames = {
    pie: "Pie Chart",
    bar: "Bar Chart",
    doughnut: "Doughnut Chart",
    line: "Line Chart",
  };

  console.log("uuu", element);

  const title = element.title ? element.title : titleNames[element.type];

  return (
    <>
      <div
        className="bg-white shadow-md rounded-lg p-5"
        style={{
          gridRow: element.position.row,
          gridColumn: element.position.col,
          order: element.order,
          height: `${element.position.height}px`,
        }}
      >
        <div className="pb-3 border-b border-gray-300">{title}</div>
        <div className="my-3">{children}</div>
      </div>
    </>
  );
};

export default Container;
