function doLoadTest(n, m) {
  var promises = [];
  for (let i = 0; i < n; i++) {
    let promise = doMTimesGame(m);
    promises.push(promise);
  }
  return promises;
}