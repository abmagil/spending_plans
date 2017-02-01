import React, {
  Component,
  PropTypes,
} from 'react';
import debounce from 'lodash/debounce';

const {
  any,
  func,
  number,
  shape,
  string,
} = PropTypes;

// A HOC that intercepts value, onChange, and onBlur handlers, from a single
// Child, wraps the event handlers in a configurable debounce, then reinjects
class DebouncedComponent extends Component {
  constructor(props) {
    super(props);
    const { debouncePeriod, children } = this.props;
    const { onChange, value } = React.Children.only(children).props;
    this.debouncedActionCreator = debounce(
      onChange,
      debouncePeriod
    );
    this.state = {
      value
    };
  }

  componentWillUnmount() {
    this.debouncedActionCreator.cancel();
  }

  // Reset local state from Redux store after debounce resolves
  componentWillReceiveProps(nextProps) {
    const { value } = React.Children.only(nextProps.children).props;
    this.setState({value});
  }

  // 
  _onChange(e) {
    e.persist();
    this.setState({
      value: Number(e.target.value)
    });
    this.debouncedActionCreator(e);
  }

  _onBlur(e) {
    e.persist();
    const { onBlur } = React.Children.only(this.props.children).props;
    this.props.onBlur && this.props.onBlur(e);
    this.debouncedActionCreator.flush();
  }
  
  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      {
        value: this.state.value,
        onChange: this._onChange.bind(this),
        onBlur: this._onBlur.bind(this),
      }
    )
  }
}

DebouncedComponent.propTypes = {
  debouncePeriod: number,
  children: shape({
    props: shape({
      type: string.isRequired,
      onChange: func.isRequired,
      onBlur: func,
      value: any.isRequired
    })
  }).isRequired
}

DebouncedComponent.defaultProps = {
  debouncePeriod: 1500,
}
export default DebouncedComponent;
