module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@ui": "./src/ui",
          "@hooks": "./src/hooks",
          "@screen": "./src/screens",
          "@models": "./src/models",
          "@api": "./src/api",
          "@redux": "./src/redux",
          "@utils": "./src/utils"
        },
      },
    ],
  ],
};
