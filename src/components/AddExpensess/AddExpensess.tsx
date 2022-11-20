
import { useExpensesContext } from '../../context/ExpenseListContext/ExpenseListContext';
import { Input } from '../Input/Input'
import { Submit } from '../Submit/Submit'
import { Title } from '../Title/Title'

export const AddExpensess = () => {
  const {setNewExpense} = useExpensesContext();

    const handleSubmit= () => {
    setNewExpense ({id:"32bsd", title:"Shapka", cost: 80})
    };


    return (
    <form>
        <Title/>
        <Input/>
        <Input/>
        {/* <Submit></Submit> */}
         <button onClick={handleSubmit}> addinForm</button>
        
    </form>
  )
  }