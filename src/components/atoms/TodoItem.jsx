export default {
  props: {
    handleClick: {
      type: Function,
      default: () => () => null,
    },
    index: {
      type: Number,
      defaut: 0,
    },
  },
  methods: {
    onClick() {
      this.handleClick(this.index);
    },
  },
  render() {
    const { onClick } = this;
    return (
      <div>
        {this.$slots.default}
        <button onClick={onClick}>remove</button>
      </div>
    );
  },
};
