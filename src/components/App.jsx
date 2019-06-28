import TitleComponent from './Title';
import Todo from './Todo';

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
