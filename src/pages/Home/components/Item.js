const Item = ({ id, itemNote, itemDate, itemTime, deleteData }) => {

    function deleteItem(prev) {
        deleteData(function(prev){
            return prev.filter(item => item.id !== id)
        })
    }

  return (
    <div className="item">
      <p>{itemNote}</p>
      <p>
        {itemDate} {itemTime}
      </p>
      <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
  );
};
export default Item;
