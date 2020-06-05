import 'ui/angular-bootstrap';
import 'plugins/kibana-time-plugin/lib/angular-bootstrap/css/btn-group.less';
import 'plugins/kibana-time-plugin/lib/angular-bootstrap/css/carousel.less';
import 'plugins/kibana-time-plugin/lib/angular-bootstrap/js/carousel.js';
import 'plugins/kibana-time-plugin/bower_components/bootstrap-addons/dist/css/bootstrap-addons.css';
import 'plugins/kibana-time-plugin/bower_components/bootstrap-addons/dist/js/bootstrap-addons.js';
import 'plugins/kibana-time-plugin/time.less';
import 'plugins/kibana-time-plugin/timeController';
import visTemplate from 'plugins/kibana-time-plugin/time.html';
import optionsTemplate from 'plugins/kibana-time-plugin/timeOptions.html';
import { AngularVisController } from 'ui/vis/vis_types/angular_vis_type';
import KbnTimeVisController  from './timeController'

import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';
import { npSetup } from 'ui/new_platform';

  const timePickeerDefinition = {
    name: 'time',
    title: 'Time widget',
    icon: 'clock',
    visualization: AngularVisController,
    description: 'Add time inputs to your dashboards.',
    visConfig: {
      template: visTemplate,
      defaults: {
          enable_quick: true,
          enable_relative: true,
          enable_absolut: true,
          enable_animation: true,
      }
    },
    editorConfig: {
      optionsTemplate: optionsTemplate
    },
    requestHandler: 'none',
    responseHandler: 'none'
  };

npSetup.plugins.expressions.registerFunction(timePickeerDefinition);
visualizations.types.createBaseVisualization(timePickeerDefinition);