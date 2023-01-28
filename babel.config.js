module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./src/components",
            "@data": "./data",
            "@screens": "./src/@screens",
            "@typings": "./src/typings",
            "@consts": "./src/consts",
            "@store": "./src/store",
            "@services": "./src/services",
            "@controllers": "./controllers",
          },
        },
      ],
      // "react-native-reanimated/plugin", // REQUIRED FOR DRAWER
    ],
  };
};
