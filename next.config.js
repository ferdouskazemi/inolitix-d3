const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.csv$/,
      use: [
        {
          loader: 'csv-loader',
          options: {
            dynamicTyping: true, // Optional: If you want to parse numbers and booleans
            header: true, // Optional: If the CSV has headers
            skipEmptyLines: true, // Optional: Skip empty lines
          },
        },
      ],
    });

    // You can customize other webpack configurations here if needed

    return config;
  },
};

module.exports = nextConfig;
