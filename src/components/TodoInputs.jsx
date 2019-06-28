export default {
  props: {
    labels: {
      type: Object,
      default: () => {},
    },
    handleSubmit: {
      type: Function,
      default: () => () => null,
    },
    handleKeyup: {
      type: Function,
      default: () => () => null,
    },
    inputText: {
      type: String,
      default: () => '',
    },
  },
  render() {
    const { labels, handleSubmit, handleKeyup, inputText } = this;

    return (
      <form onSubmit={handleSubmit}>
        <h2>{labels.caption}</h2>
        <input onKeyup={e => handleKeyup(e.target.value)} value={inputText} />
        <button>{labels.button}</button>
      </form>
    );
  },
};
