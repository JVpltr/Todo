import {TTodoItem} from "./todoList";
type TTodoItemProps = {
    item: TTodoItem,
    onItemToggleCheck: (item: TTodoItem) => void,
    onItemDeletion : (item: TTodoItem) => void,
}
export const TodoItem = ({item, onItemToggleCheck, onItemDeletion}: TTodoItemProps) => {
    return(
        <div className={'todoItem'}>
            <div className={'todoCheck'} onClick={() => onItemToggleCheck(item)}>
                <input id={`itemCheck-${item.id}`} type={"checkbox"} checked={item.done} onChange={() => onItemToggleCheck(item)}/>
                <span className="checkmark"></span>
                <label htmlFor={`itemCheck-${item.id}`}>{item.text}</label>
            </div>
            <button onClick={() => onItemDeletion(item)}>x</button>
        </div>
    )
}