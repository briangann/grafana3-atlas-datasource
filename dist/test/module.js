'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = require('./datasource');

var _query_ctrl = require('./query_ctrl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AtlasConfigCtrl = function AtlasConfigCtrl() {
  _classCallCheck(this, AtlasConfigCtrl);
};

AtlasConfigCtrl.templateUrl = 'partials/config.html';

var AtlasQueryOptionsCtrl = function AtlasQueryOptionsCtrl() {
  _classCallCheck(this, AtlasQueryOptionsCtrl);
};

AtlasQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

exports.Datasource = _datasource.AtlasDatasource;
exports.QueryCtrl = _query_ctrl.AtlasDatasourceQueryCtrl;
exports.ConfigCtrl = AtlasConfigCtrl;
exports.QueryOptionsCtrl = AtlasQueryOptionsCtrl;
//# sourceMappingURL=module.js.map
