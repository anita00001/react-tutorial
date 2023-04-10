function InputTodo() {
    return (
        <form class="new-task">
            <input id="my-task" type="text" placeholder="Add Task To Your List" />
            <button id="press-enter"><i class="fa-solid fa-arrow-turn-down"></i></button>
        </form>
    );
}

export default InputTodo;