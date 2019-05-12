const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
  drivers.push(driver)
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(driver) {
  var arr = []
  arr.push(driver)
  return drivers.concat(arr)
}

function prependDriver(driver) {
  var arr = []
  arr.push(driver)
  return arr.concat(drivers)
}

function removeLastDriver() {
  var arr = drivers.slice(0,-1)
  return arr
}

function removeFirstDriver() {
  var arr = drivers.slice(1);
  return arr
}
