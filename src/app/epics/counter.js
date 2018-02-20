const counter = action$ =>
  action$
    .ofType('INCREMENT')
    .delay(2000)
    .mapTo({ type: 'DECREMENT' });

export default counter;
