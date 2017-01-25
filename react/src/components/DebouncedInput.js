import React, { Component } from 'react';
import debounce from 'lodash/debounce';

class DebouncedField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  componentWillMount() {
    const { debouncePeriod, updateHandler } = this.props;
    this.debouncedActionCreator = debounce(
      updateHandler,
      debouncePeriod
    );
  }

  componentWillUnmount() {
    this.debouncedActionCreator.cancel();
  }

  componentWillReceiveProps({value}) {
    this.setState({value});
  }

  onChange = (e) => {
    e.persist();
    this.setState({
      value: Number(e.target.value)
    });
    this.debouncedActionCreator(e);
  }
  
  render() {
    const { className, type } = this.props;
    const { value } = this.state;

    return (
      <input
        className={className}
        type={type}
        value={value}
        onChange={this.onChange}
        onBlur={this.debouncedActionCreator.flush}
      />
    )
  }
}

DebouncedField.defaultProps = {
  debouncePeriod: 1500,
}

export default DebouncedField;
