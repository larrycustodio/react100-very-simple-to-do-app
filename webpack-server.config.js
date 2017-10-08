const path = require('path');

module.exports = {
    entry: ["./app/index.jsx"],

    output: {
        filename: 'bundle.js', 
        path: path.join(__dirname,'./dist'),
    },

    module: {
        loaders: [
            {
                loaders: ["babel-loader"],
                test: /\.jsx?$/,
                exclude: /node_modules/,
            },
            
        ]
    }
}