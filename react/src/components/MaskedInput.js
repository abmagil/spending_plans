import React, { Component } from 'react';
import identity from 'lodash/identity';

function MaskedInput({validatorFn=identity, value, type, ...cleanedProps}) {
  const cleanedValue = validatorFn(value);

  return <input {...cleanedProps} type={type} value={cleanedValue} />
}

export default MaskedInput;
