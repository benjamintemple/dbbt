import { ProductTitle } from "./ProductTitle";
import { Qty } from "./Qty";
import { Price } from "./Price";
import { DeleteRowButton } from "./DeleteRowButton";
export const ItemRow = ({
  productName,
  productQty,
  itemPrice,
  uid,
  handleRemove,
}) => {
  return (
    <tr>
      <td>
        <ProductTitle title={productName} />
      </td>
      <td>
        <Qty quantity={productQty} />
      </td>
      <td>
        <Price amount={itemPrice * productQty} />
      </td>
      <td>
        <DeleteRowButton id={uid} handleRemove={handleRemove} />
      </td>
    </tr>
  );
};
