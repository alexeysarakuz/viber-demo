const path = require("path");

module.exports = {
  exportTrailingSlash: true,
  trailingSlash: true,
  
  env: {
    //   apiUrl: 'http://localhost:1337',
    // apiUrl: 'http://18.192.139.233:1337',
    //   cdn: 'https://static.tastewise.io/uploads/',
    langs: ["en", "fr"],
    API_URL: 'http://31.131.25.234:1337'
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    config.resolve.alias["pages"] = path.join(__dirname, "pages");
    config.resolve.alias["lib"] = path.join(__dirname, "lib");

    return config;
  },
};
