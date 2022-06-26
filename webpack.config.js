const path=require('path');

module.exports= {
    mode: 'development',
    entry: './model/firebase.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}