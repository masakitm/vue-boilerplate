import TitleComponent from './atoms/Title';
import Todo from './organisms/Todo';

const messages = {
  title: 'welcome back to vue.js',
};

export default {
  render() {
    return (
      <div id="todo">
        <TitleComponent>{messages.title}</TitleComponent>
        <Todo />
      </div>
    );
  },
};
