module.exports = function(grunt) {
    //Project Configuration

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            build: {
                files: [
                    {
                        src: "server/public/scripts/appRoute.js",
                        dest: "server/public/scripts/app.min.js"
                    }
                ]

            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "node_modules/bootstrap",
                        src: [
                            "dist/css/*",
                            "dist/fonts/*",
                            "dist/js/*",
                            "fonts/*"
                        ],
                        "dest": "server/public/vendors/bootstrap"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "angular/angular.js",
                            "angular/angular.min.js",
                            "angular/angular.min.js.map",
                            "angular/angular-csp.css"
                        ],
                        "dest": "server/public/vendors"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "angular-route/angular-route.min.js",
                            "angular-route/angular-route.min.js.map"
                        ],
                        "dest": "server/public/vendors"
                    }

                ]
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default task(s)
    grunt.registerTask('default', ['copy', 'uglify']);
};