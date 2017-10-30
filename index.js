const driver = {};

function updateDriverWithKeyAndValue(driver, key, val) {
  return Object.assign({}, driver, { [key]: val })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  driver[key] = val
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newobj = Object.assign({}, driver)
  delete newobj.key
  return newobj
}
