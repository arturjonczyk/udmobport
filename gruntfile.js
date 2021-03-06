module.exports = function (grunt) {

    // Configure task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: '70px',
                        quality: 50,
                    }]
                },
                files: [{
                    expand: true,
                    src: ['profilepicaj.jpg'],
                    cwd: 'img/',
                    dest: 'img/'
                }]
            }
        },
        browserSync: {
            bsFiles: {
                src: [
                    'css/*.css',
                    'index.html'
                ]
            },
            options: {
                server: {
                    baseDir: './'
                },
                browser: 'google chrome',
                notify: false,
                //tunnel: true,
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-responsive-images');

    // Register task(s)
    grunt.registerTask('default', []);
    grunt.registerTask('compress', ['responsive_images']);
    grunt.registerTask('sync', ['browserSync']);
};
