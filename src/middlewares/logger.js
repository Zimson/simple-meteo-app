export default store => next => action => {
    "use strict";
    console.log('---', 'before', store.getState());
    console.log('---', 'dispatching', action);
    next(action);
    console.log('---', 'after', store.getState());
}