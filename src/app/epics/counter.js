/**
 * Epic to manage counter side effects
 * @param {Observable} action$ - stream of actions
 */
const counter = action$ =>
  action$
    .ofType('INCREMENT')
    .delay(2000)
    .mapTo({ type: 'DECREMENT' });

export default counter;
