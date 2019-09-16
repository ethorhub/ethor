const appendObjTo = (thatArray, newObj) => {
  const frozenObj = Object.freeze(newObj);
  return Object.freeze(thatArray.concat(frozenObj));
};

module.exports = {
  appendObjTo
};
