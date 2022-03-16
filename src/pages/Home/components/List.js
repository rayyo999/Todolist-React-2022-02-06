import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return <Item key={id} id={id} itemNote={note} itemDate={date} itemTime={time} deleteData={deleteData}/>;
      })}
    </div>
  );
};
export default List;
