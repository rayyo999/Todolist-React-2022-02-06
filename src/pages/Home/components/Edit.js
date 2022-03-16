import { useState } from "react";
import {v4} from 'uuid';

const Edit = ({ editData }) => {
  function addItem() {
    editData(function (prevData) {
      return [
        {
          id : v4(),  
          note,
          date,
          time,
        },
        ...prevData
      ];
    });
  }

  const [note, setNote] = useState("");
  function changeNote(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function changeDate(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function changeTime(e) {
    setTime(e.target.value);
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事</p>
      <input type="text" value={note} onChange={changeNote} />
      <p>日期</p>
      <input type="date" value={date} onChange={changeDate} />
      <p>時間</p>
      <input type="time" value={time} onChange={changeTime} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};
export default Edit;
