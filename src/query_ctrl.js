import angular from "angular";
import _ from "lodash";
import {QueryCtrl} from 'app/plugins/sdk';
import './css/query-editor.css!';

export class AtlasDatasourceQueryCtrl extends QueryCtrl {

    constructor($scope, $injector, templateSrv, uiSegmentSrv) {
        super($scope, $injector);

        this.scope = $scope;
        this.uiSegmentSrv = uiSegmentSrv;
        this.templateSrv = templateSrv;
        this.target.target = this.target.target || 'select metric';
        this.scope.atlas = {};
        this.scope.atlas.aggregations = [
            "sum",
            "avg",
            "count",
            "max",
            "min",
            "cf-avg",
            "cf-max",
            "cf-min",
            "cf-sum"
        ];
        this.scope.atlas.logical = [
            "and",
            "or"
        ];
        this.scope.atlas.notCondition = [
            " ",
            "not"
        ];
        this.scope.atlas.matchers = [
            "eq",
            "ge",
            "gt",
            "le",
            "lt",
            "has",
            "in",
            "re",
            "reic"
        ];
    }

    getOptions() {
        return this.datasource.metricFindQuery(this.target)
            .then(this.uiSegmentSrv.transformToSegments(true));
        // Options have to be transformed by uiSegmentSrv to be usable by metric-segment-model directive
    }

    getDimensionsForMetric() {
      if (this.target.target) {
        console.log("have a target, getting applicable dimensions");

        return this.datasource.metricFindDimensions(this.target)
          .then(this.uiSegmentSrv.transformToSegments(true));
      }
    }

    getDimensionValues(tag) {
      if (tag) {
        console.log("have a dimension, getting available values");
        return this.datasource.dimensionFindValues(this.target,tag)
          .then(this.uiSegmentSrv.transformToSegments(true));
      }
    }

    onChangeInternal() {
        this.panelCtrl.refresh(); // Asks the panel to refresh data.
    }

    toggleRawQuery() {
        this.target.rawQueryInput = !this.target.rawQueryInput;
        this.panelCtrl.refresh();
    }

    removeTag(tag) {
        if (this.target.tags) {
            this.target.tags.splice(this.target.tags.indexOf(tag), 1);
            this.panelCtrl.refresh();
        }
    }

    addTag() {
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

    removeGroupBy(groupBy) {
        if (this.target.groupBys) {
            this.target.groupBys.splice(this.target.groupBys.indexOf(groupBy), 1);
        }
    }

    addGroupBy() {
        if (!this.target.groupBys) {
            this.target.groupBys = [];
        }
        this.target.groupBys.push({});
    }
}

AtlasDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
