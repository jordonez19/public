import React from "react";

import { ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";

const ShoppingCart = ({ itemCount = 5 }) => {
  return (
    <>
      {itemCount > 0 ? (
        <Link href="/page-three" className="shopping-cart-link">
          <ShoppingCartOutlined className="shopping-cart-icon" />
          {itemCount > 0 && (
            <div className="item-count-circle">{itemCount}</div>
          )}
        </Link>
      ) : null}
    </>
  );
};

export default ShoppingCart;
