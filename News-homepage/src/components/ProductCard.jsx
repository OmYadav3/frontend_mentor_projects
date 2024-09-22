import React from "react";


const ProductCard = (props) => {
  return (
    <div>
      <div className="card flex md:w-96 my-4  ">
        <div className="img md:h-40 ">
        <img className="h-[8rem] min-w-[110px] object-fill " src={props.url} alt="not found" />
        </div>
        <div className="details md:p-2 pl-6  ">
          <div className="text-4xl font-semibold opacity-30 ">
            {props.ProductNumber}
          </div>
          <div className="text-lg font-bold hover:text-red-500 mt-2">{props.ProductName}</div>
          <div className="text-sm mt-2 opacity-60">{props.Productdetails}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
