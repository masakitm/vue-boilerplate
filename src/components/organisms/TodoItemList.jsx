import TodoItem from '../atoms/TodoItem';

export default {
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    handleClick: {
      type: Function,
      default: () => () => null,
    },
  },
  render() {
    const { itemList, handleClick } = this;
    return (
      <div>
        {itemList.map((item, index) => (
          <TodoItem key={item.id} index={index} handleClick={handleClick}>
            {item.name}
          </TodoItem>
        ))}
      </div>
    );
  },
};
