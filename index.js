const driver = {}

function updatedriverWithKeyAndValue(obj, key, val) {
  return Object.assign({}, driver, {[key]: val})
}