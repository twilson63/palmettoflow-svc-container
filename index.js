require('health-server')

// expects configuration object with a get method
// expects service array of string npm module names
//
// expects each module to use a higher order pattern
// to take the config as the first parameter and return
// a function to take the adapter `ee`
//
module.exports = function (config, services) {
  var palmetto = require(config.get('adapter'))
  var ee = palmetto(config.get('palmetto'))

  services.map(function (s) {
    require(s)(config.get(s))(ee)
  })
}