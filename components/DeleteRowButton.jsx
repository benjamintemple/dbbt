export const DeleteRowButton = ({ id, handleRemove }) => {
  return <button onClick={() => handleRemove(id)}>Delete</button>;
};
