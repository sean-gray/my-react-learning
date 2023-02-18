
import ExpenseDate from './ExpenseDate'
import "./Expenseitem.css";
import Card from "../UI/Card"
import { useState } from 'react';

const Expenseitem = (props) => {
  // const expenseDate = new Date(2022, 12, 28)
  // const expenseDesc = 'Car Insurance'
  // const expensePrice = 495.34
  const [title, setTitle] = useState(props.title)

  const clickHandler = () =>{
    setTitle('Updated Title!')
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
}

export default Expenseitem;
