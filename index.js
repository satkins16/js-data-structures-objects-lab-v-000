const driver = {}

function updatedriverWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, { [key]: val })
}
