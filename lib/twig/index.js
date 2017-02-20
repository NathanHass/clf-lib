var requireDir = require( 'require-dir' );

module.exports = {
  filters: requireDir( './filters' ),
  functions: requireDir( './functions' )
};
