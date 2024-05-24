/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* todos = [
    {
        title: "Go to Gym",
        description: "going to gym"
    }
]

*/

export function Todos({todos}){
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
        console.log(todos)
    </div>
}