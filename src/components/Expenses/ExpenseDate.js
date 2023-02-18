import './ExpenseDate.css'


const ExpenseDate = (props) =>{

    const year = props.date.getFullYear();
    const date = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__date">{date}</div>
      </div>
    );

}





export default ExpenseDate;