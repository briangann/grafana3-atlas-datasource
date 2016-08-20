'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var AtlasDatasource, AtlasDatasourceQueryCtrl, AtlasConfigCtrl, AtlasQueryOptionsCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      AtlasDatasource = _datasource.AtlasDatasource;
    }, function (_query_ctrl) {
      AtlasDatasourceQueryCtrl = _query_ctrl.AtlasDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', AtlasConfigCtrl = function AtlasConfigCtrl() {
        _classCallCheck(this, AtlasConfigCtrl);
      });

      AtlasConfigCtrl.templateUrl = 'partials/config.html';

      _export('QueryOptionsCtrl', AtlasQueryOptionsCtrl = function AtlasQueryOptionsCtrl() {
        _classCallCheck(this, AtlasQueryOptionsCtrl);
      });

      AtlasQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('Datasource', AtlasDatasource);

      _export('QueryCtrl', AtlasDatasourceQueryCtrl);

      _export('ConfigCtrl', AtlasConfigCtrl);

      _export('QueryOptionsCtrl', AtlasQueryOptionsCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
