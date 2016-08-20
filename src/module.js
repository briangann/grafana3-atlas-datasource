import {AtlasDatasource} from './datasource';
import {AtlasDatasourceQueryCtrl} from './query_ctrl';

class AtlasConfigCtrl {}
AtlasConfigCtrl.templateUrl = 'partials/config.html';

class AtlasQueryOptionsCtrl {}
AtlasQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

export {
  AtlasDatasource as Datasource,
  AtlasDatasourceQueryCtrl as QueryCtrl,
  AtlasConfigCtrl as ConfigCtrl,
  AtlasQueryOptionsCtrl as QueryOptionsCtrl
};
