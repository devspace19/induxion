export default () => {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    const { promise, types, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ ...(rest || {}), type: REQUEST });

    const actionPromise = promise(dispatch, getState);

    actionPromise.then(
      result => next({ ...(rest || {}), result, type: SUCCESS }),
      error => next({ ...(rest || {}), error, type: FAILURE })
    );

    return actionPromise;
  };
};
