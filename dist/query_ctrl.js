"use strict";

System.register(["angular", "lodash", "app/plugins/sdk", "./css/query-editor.css!"], function (_export, _context) {
    "use strict";

    var angular, _, QueryCtrl, _createClass, AtlasDatasourceQueryCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_angular) {
            angular = _angular.default;
        }, function (_lodash) {
            _ = _lodash.default;
        }, function (_appPluginsSdk) {
            QueryCtrl = _appPluginsSdk.QueryCtrl;
        }, function (_cssQueryEditorCss) {}],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("AtlasDatasourceQueryCtrl", AtlasDatasourceQueryCtrl = function (_QueryCtrl) {
                _inherits(AtlasDatasourceQueryCtrl, _QueryCtrl);

                function AtlasDatasourceQueryCtrl($scope, $injector, templateSrv, uiSegmentSrv) {
                    _classCallCheck(this, AtlasDatasourceQueryCtrl);

                    var _this = _possibleConstructorReturn(this, (AtlasDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(AtlasDatasourceQueryCtrl)).call(this, $scope, $injector));

                    _this.scope = $scope;
                    _this.uiSegmentSrv = uiSegmentSrv;
                    _this.templateSrv = templateSrv;
                    _this.target.target = _this.target.target || 'select metric';
                    _this.scope.atlas = {};
                    _this.scope.atlas.aggregations = ["sum", "avg", "count", "max", "min", "cf-avg", "cf-max", "cf-min", "cf-sum"];
                    _this.scope.atlas.steps = ["s", "m", "h", "d"];
                    _this.scope.atlas.logical = ["and", "or"];
                    _this.scope.atlas.notCondition = [" ", "not"];
                    _this.scope.atlas.matchers = ["eq", "ge", "gt", "le", "lt", "has", "in", "re", "reic"];
                    return _this;
                }

                _createClass(AtlasDatasourceQueryCtrl, [{
                    key: "getOptions",
                    value: function getOptions() {
                        return this.datasource.metricFindQuery(this.target).then(this.uiSegmentSrv.transformToSegments(true));
                        // Options have to be transformed by uiSegmentSrv to be usable by metric-segment-model directive
                    }
                }, {
                    key: "getDimensionsForMetric",
                    value: function getDimensionsForMetric() {
                        if (this.target.target) {
                            console.log("have a target, getting applicable dimensions");

                            return this.datasource.metricFindDimensions(this.target).then(this.uiSegmentSrv.transformToSegments(true));
                        }
                    }
                }, {
                    key: "getDimensionValues",
                    value: function getDimensionValues(tag) {
                        if (tag) {
                            console.log("have a dimension, getting available values");
                            return this.datasource.dimensionFindValues(this.target, tag).then(this.uiSegmentSrv.transformToSegments(true));
                        }
                    }
                }, {
                    key: "onChangeInternal",
                    value: function onChangeInternal() {
                        this.panelCtrl.refresh(); // Asks the panel to refresh data.
                    }
                }, {
                    key: "toggleRawQuery",
                    value: function toggleRawQuery(aTarget) {
                        aTarget.rawQueryInput = !aTarget.rawQueryInput;
                        this.panelCtrl.refresh();
                    }
                }, {
                    key: "removeTag",
                    value: function removeTag(tag) {
                        if (this.target.tags) {
                            this.target.tags.splice(this.target.tags.indexOf(tag), 1);
                            this.panelCtrl.refresh();
                        }
                    }
                }, {
                    key: "addTag",
                    value: function addTag() {
                        if (!this.target.tags) {
                            this.target.tags = [];
                        }
                        this.target.tags.push({
                            name: null,
                            value: null,
                            notCondition: this.scope.atlas.notCondition[0],
                            logical: this.scope.atlas.logical[0],
                            matcher: this.scope.atlas.matchers[0]
                        });
                    }
                }, {
                    key: "removeGroupBy",
                    value: function removeGroupBy(groupBy) {
                        if (this.target.groupBys) {
                            this.target.groupBys.splice(this.target.groupBys.indexOf(groupBy), 1);
                        }
                    }
                }, {
                    key: "addGroupBy",
                    value: function addGroupBy() {
                        if (!this.target.groupBys) {
                            this.target.groupBys = [];
                        }
                        this.target.groupBys.push({});
                    }
                }]);

                return AtlasDatasourceQueryCtrl;
            }(QueryCtrl));

            _export("AtlasDatasourceQueryCtrl", AtlasDatasourceQueryCtrl);

            AtlasDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
        }
    };
});
//# sourceMappingURL=query_ctrl.js.map
