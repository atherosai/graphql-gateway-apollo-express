const assignAttributesToObject = (objToAssign, inputObject) => {
  Object.keys(inputObject).forEach((key) => {
    objToAssign[key] = inputObject[key];
  });
  return objToAssign;
};

export default assignAttributesToObject;
