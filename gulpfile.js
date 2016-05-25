const gulp = require('gulp');
const path = require('path');
let {UbiquitsProject} = require('@ubiquits/core/tasks');

new UbiquitsProject(path.resolve('.')).registerDefaultTasks(gulp);

