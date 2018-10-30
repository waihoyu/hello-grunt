
var  grunt = require('grunt')

module.exports = function (grunt){
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('hello',function (){
    	console.log("hello grunt");
    });

    grunt.registerTask('default',['hello']);
}