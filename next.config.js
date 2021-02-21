module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=1000000000000000000',
      },
    );
    return config;
  },
};
