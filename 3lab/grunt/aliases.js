module.exports = 
{
    'build': ['clean:oldHashes', 'concat', 'eslint', 'uglify', 'cssmin', 'hashres', 'copy'],
    'default': ['clean', 'build', 'connect', 'watch']
};