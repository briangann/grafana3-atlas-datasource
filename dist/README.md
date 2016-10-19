# Atlas plugin for Grafana 3.x

[Atlas by Netflix](https://github.com/Netflix/atlas) is a backend for managing dimensional time series data.

![Grafana](http://grafana.org/assets/img/logo_new_transparent_200x48.png)

![Atlas plugin for Grafana](https://briangann.github.io/grafana3-atlas-datasource/example-query.png)

Additional docs at [github.io](https://briangann.github.io/grafana3-atlas-datasource)

### About this plugin
This [Grafana 3.x](https://grafana.org) plugin for Atlas provides a query builder with aliases, dimensions, aggregations and grouping.

The query builder provides metric hints for tags on the fly, along with their dimensions, allowing you to construct Atlas queries easily.

A "raw" query method is also available via a toggle in the query builder that will accept well-formed Atlas queries.

### Running with Docker
A ``docker-compose.yml`` file is provided to easily stand up a Grafana 3.x server with this datasource mapped to the container.

### Installation

* Copy/clone this repos into /var/lib/grafana/plugins
* Restarting ``grafana-server`` is required to pick up the plugin.

Once the plugin is "feature complete" a PR will be made to add this plugin to the official datasource plugins on [Grafana.net](http://grafana.net)

### Important
You need to run Atlas 1.5.0+ for this to function properly as ``std.json`` output is mandatory.


### Using the plugin

#### Setup datasource

![Add Atlas Datasource](https://briangann.github.io/grafana3-atlas-datasource/add-datasource.png)

![Test Atlas Datasource](https://briangann.github.io/grafana3-atlas-datasource/test-datasource.png)

#### Using query builder

Add a new graph to a dashboard and select the Atlas datasource.

![Example Query builder ](https://briangann.github.io/grafana3-atlas-datasource/example-query.png)

#### Tag hints

Select the textbox for metrics, and hints will be provided:

![Hints](https://briangann.github.io/grafana3-atlas-datasource/tag-query-hints.png)

Hints for dimensions that apply the selected metric are also provided.

#### Using raw query

Add a new graph to a dashboard and select the Atlas datasource.

![Example Raw Query builder ](https://briangann.github.io/grafana3-atlas-datasource/example-raw-query.png)

### References

This plugin is inspired by the v2.6 plugin available at https://github.com/upwork/grafana-atlas-datasource

More info about Atlas data formats [here](https://github.com/Netflix/atlas/wiki/Output-Formats).
