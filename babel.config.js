module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@data": "./data",
            "@controllers": "./controllers",
            components: "./src/components",
            screens: "./src/screens",
            typings: "./src/typings",
            consts: "./src/consts",
            store: "./src/store",
            services: "./src/services",
            theme: "./src/theme",
            i18n: "./src/i18n",
          },
        },
      ],
      // "react-native-reanimated/plugin", // REQUIRED FOR DRAWER
    ],
  };
};
