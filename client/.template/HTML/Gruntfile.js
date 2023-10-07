module.exports = function(grunt) {
    const sass = require('node-sass');
    grunt.initConfig({
        sass: {
            dist: {
                options: {
					outputStyle: 'compressed',
                    implementation: sass,
                    includePaths: ["node_modules/bootstrap/scss/bootstrap.scss"],
				},
                files: [
                    {
                        "dist/assets/css/ebazar.style.min.css":             [ "scss/main.scss"],
                    },
                ],
            },
        },
        uglify: {
            my_target: {
                files: {
                    "dist/assets/bundles/libscripts.bundle.js": [ "node_modules/jquery/dist/jquery.js", "node_modules/bootstrap/dist/js/bootstrap.bundle.js", "dist/assets/plugin/colorpicker/colorpicker.js"],
                    "dist/assets/bundles/apexcharts.bundle.js": [ "node_modules/apexcharts/dist/apexcharts.min.js"],
                    "dist/assets/bundles/sparkline.bundle.js":  [ "node_modules/jquery-sparkline/jquery.sparkline.min.js"],
                    "dist/assets/bundles/dataTables.bundle.js": [ "dist/assets/plugin/datatables/jquery.dataTables.min.js", "dist/assets/plugin/datatables/dataTables.bootstrap5.min.js","dist/assets/plugin/datatables/dataTables.responsive.min.js"],
                    "dist/assets/bundles/dropify.bundle.js":    [ "node_modules/dropify/dist/js/dropify.min.js"],
                    "dist/assets/bundles/invoice.bundle.js":    ["dist/assets/plugin/invoice/beacon.min.js","dist/assets/plugin/invoice/example.js"],
                },
            },
        },
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};