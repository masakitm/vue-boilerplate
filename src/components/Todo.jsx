import TodoInputs from './TodoInputs';
import TodoItemList from './TodoItemList';

const labelTexts = {
  caption: 'input & add todo items',
  button: 'ADD',
};

const createInitData = () => ({
  id: 0,
  tempText: '',
  todoList: [],
});

const createNewItem = (id, text) => ({
  id,
  name: text,
  done: false,
});

export default {
  data: () => ({
    ...createInitData(),
  }),
  computed: {
    labels: () => labelTexts,
    hasItem() {
      return this.todoList.length > 0;
    },
    alreadyExists() {
      return this.todoList.some(item => item.name === this.tempText);
    },
  },
  methods: {
    addTodoItem(e) {
      e.preventDefault();

      if (this.alreadyExists) {
        return;
      }

      const { id, tempText, todoList } = this;
      this.todoList = [...todoList, createNewItem(id, tempText)];
      this.id = id + 1;
      this.tempText = createInitData().tempText;
    },
    updateTempText(text) {
      this.tempText = text;
    },
    removeTodoItem(num) {
      this.todoList = this.todoList.filter((elem, index) => index !== num);
    },
  },
  render() {
    const {
      labels,
      addTodoItem,
      updateTempText,
      tempText,
      todoList,
      removeTodoItem,
      hasItem,
      alreadyExists,
    } = this;

    return (
      <div>
        <TodoInputs
          labels={labels}
          handleSubmit={addTodoItem}
          handleKeyup={updateTempText}
          inputText={tempText}
        />
        {alreadyExists && <div>the item has already exits. </div>}
        {hasItem && (
          <TodoItemList itemList={todoList} handleClick={removeTodoItem} />
        )}
      </div>
    );
  },
};
