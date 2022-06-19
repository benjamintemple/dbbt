import { ItemRow } from "./ItemRow";
export const Cart = ({ data, handleRemove }) => {
  return (
    <>
      <tbody>
        {data.map(item => {
          return (
            <ItemRow
              key={item.id}
              productName={item.productName}
              productQty={item.productQty}
              itemPrice={item.itemPrice}
              uid={item.id}
              handleRemove={handleRemove}
            />
          );
        })}
      </tbody>
    </>
  );
};
