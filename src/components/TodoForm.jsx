import React from "react";
import { useState } from "react";
import { useTodo } from "../context/todoContext";
    function TodoForm() {
    const [todo, setTodo]=useState("");
    const {addTodo}=useTodo();

    const add =(e)=>{
        e.preventDefault();
        if(!todo) return
        addTodo({todo, completed: false});
        setTodo("");
    };

        
    return (
        <form
            onSubmit={add}
            className="flex w-full items-center gap-2 p-4 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full rounded-lg px-4 py-2 text-lg outline-none bg-white/80 text-gray-800 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-purple-400 transition duration-200 shadow-sm"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="flex items-center gap-2 rounded-lg px-5 py-2 font-semibold bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:scale-105 hover:from-green-500 hover:to-green-700 transition duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

