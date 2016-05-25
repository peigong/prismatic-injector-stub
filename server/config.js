'use strict';

const fs = require('fs');
const loc = [process.cwd(), 'loc.json'].join('/');

var hostname = 'localhost';
if(fs.existsSync(loc)){
    hostname = require(loc).hostname;
}

const config = {
    dir: 'dist',
    template: `http://${ hostname }:3081/templates`,
    service: `http://${ hostname }:3082/api`
};

module.exports = config; 
