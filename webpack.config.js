const path = require("path");

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';


module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {

                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
        
              },
              {
        
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][ext][query]'
                }
        
              },
              {
        
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name][ext][query]'
                }
        
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              },
        ]
    }
}