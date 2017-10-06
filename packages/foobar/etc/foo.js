// It's OK now
const del = require('del');

// Using console calls will trigger warnings as expected
del('./foo')
  .then(console.log)
  .catch(console.error);
