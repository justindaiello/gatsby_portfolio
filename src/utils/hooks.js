import React from 'react';
import produce from 'immer';

export function useImmer(initValue) {
  let [val, updateVal] = React.useState(initValue);
  return [
    val,
    React.useCallback((updater) => {
      updateVal(produce(updater));
    }, []),
  ];
}
