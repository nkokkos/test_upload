// Entry point for the build script in your package.json

// load jquery before everything else first through a separate file:
import './load_jquery.js'

// include bootstrap 4.6.1:
import 'bootstrap/dist/js/bootstrap.bundle.js';

import "@hotwired/turbo-rails"
import "./controllers"

// Load rails's libraries:
import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import './direct_uploads.js';
Rails.start();
ActiveStorage.start();

// load chartkick library
import 'chartkick/chart.js';



