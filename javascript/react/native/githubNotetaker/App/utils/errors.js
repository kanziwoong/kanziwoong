'use strict';

require('extend-error');

var HandledError = Error.extend('HandledError', 400);

module.exports = {
  HandledError: HandledError,
};
