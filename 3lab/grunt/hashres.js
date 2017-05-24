module.exports =
{
    options:
    {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },
    prod:
    {
        src: ['.build/js/index.js', '.build/css/style.css'],
        dest: 'index.html'
    }
};