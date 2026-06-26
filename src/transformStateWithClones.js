/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];
  let stateCopy = { ...state };

  for (const action of actions) {
    if (action.type === 'clear') {
      stateCopy = {};
    }

    if (action.type === 'addProperties') {
      stateCopy = {
        ...stateCopy,
        ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      stateCopy = { ...stateCopy };

      for (const key of action.keysToRemove) {
        delete stateCopy[key];
      }
    }

    history.push(stateCopy);
  }

  return history;
}

module.exports = transformStateWithClones;
