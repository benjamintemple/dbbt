import { useState } from "react";
import { PageTitle } from "../components/PageTitle";
import { TableHeaders } from "../components/TableHeaders";
import { Cart } from "../components/Cart";
import { Total } from "../components/Total";
import { TableWrapper } from "../components/TableWrapper";

const cartData = [
  { id: 0, productName: "Coke", productQty: 4, itemPrice: 2 },
  { id: 1, productName: "Fanta", productQty: 1, itemPrice: 3 },
  { id: 2, productName: "Sprite", productQty: 5, itemPrice: 1 },
];

export default function App() {
  const [cartState, setCartState] = useState(cartData);

  // calculate cart total
  const initialValue = 0;
  const cartTotal = cartState.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.itemPrice * currentValue.productQty,
    initialValue
  );

  const handleRemove = id => {
    const newCart = cartState.filter(row => {
      return row.id !== id;
    });
    setCartState(newCart);
  };

  return (
    <>
      <PageTitle text="Shopping Cart" />
      <TableWrapper>
        <TableHeaders />
        <Cart data={cartState} handleRemove={handleRemove} />
      </TableWrapper>
      <Total amount={cartTotal} />
    </>
  );
}
