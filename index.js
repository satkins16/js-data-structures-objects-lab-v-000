const driver = {};

function updatedriverWithKeyAndValue(driver, key, val) {
  return Object.assign({}, driver, { [key]: val })
}
