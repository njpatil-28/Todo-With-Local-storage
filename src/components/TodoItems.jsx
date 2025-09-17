import { useTodo } from "../context/todoContext";
import { useState } from "react";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleTodo} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false);
    }

    const toggleCompleted =()=>{
        toggleTodo(todo.id);
        setIsTodoEditable(false);
    }

return (
    <div
        className={`flex items-center gap-4 p-4 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
            todo.completed 
                ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-200 opacity-75" 
                : "bg-gradient-to-r from-white/90 to-gray-50/90 border-gray-200"
        }`}
    >
        <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer accent-purple-500 rounded focus:ring-2 focus:ring-purple-400"
            checked={todo.completed}
            onChange={toggleCompleted}
        />
        <input
            type="text"
            className={`flex-1 text-lg font-medium outline-none bg-transparent rounded-lg px-3 py-2 transition-all duration-200 ${
                isTodoEditable 
                    ? "border-2 border-purple-300 bg-white shadow-sm focus:border-purple-500" 
                    : "border-2 border-transparent hover:bg-white/50"
            } ${
                todo.completed 
                    ? "line-through text-gray-500" 
                    : "text-gray-800"
            }`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button
            className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold shadow-md transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                isTodoEditable
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                    : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
            }`}
            onClick={() => {
                if (todo.completed) return;

                if (isTodoEditable) {
                    editTodo();
                } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
            title={isTodoEditable ? "Save" : "Edit"}
        >
            {isTodoEditable ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            )}
        </button>
        {/* Delete Todo Button */}
        <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-md hover:scale-110 hover:from-red-600 hover:to-red-700 transition-all duration-200"
            onClick={() => deleteTodo(todo.id)}
            title="Delete"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
    </div>
);
}

export default TodoItem;
