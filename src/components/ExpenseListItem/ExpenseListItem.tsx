import { useExpensesContext } from "../../context/ExpenseListContext/ExpenseListContext";
import { Badge } from "../Badge/Badge";
interface IProps {
  title:string;
  price:number;
}


export const ExpenseListItem = ({title, price}:IProps) => {


 return (
            <li >
              {title}= {price}
              <Badge/>
            </li>
          );
}

