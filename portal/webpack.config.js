const path = require("path");
const glob = require("glob");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";
const devTool = isProd ? {} : {devtool: "eval-source-map"};

const entries = {};
glob.sync("app/javascript/packs/*.{ts,tsx}").forEach(filePath => {
  const name = path.basename(filePath, path.extname(filePath));
  console.log(name);
  entries[name] = path.resolve(__dirname, filePath);
});



// https://github.com/protobufjs/protobuf.js/issues/997
const evalReplaceRule = {
  test: /\.js$/,
  use: [
    {
      loader: 'string-replace-loader',
      options: {
        multiple: [{
          search: /eval.*\(moduleName\);/g,
          replace: 'undefined;',
        }],
      },
    },
  ],
  include: [
    path.join(__dirname, 'node_modules/@protobufjs/inquire'),
  ],
}

module.exports =  [
  {
    ...devTool,
    mode: isProd ? "production" : "development",
    entry: entries,
    output: {
      path: path.resolve(__dirname, "public/packs"),
      publicPath: "/packs/",
      filename: isProd ? "[name]-[contenthash].js" : "[name].js",
    },
    optimization: {
      splitChunks: {
        name: "vendor",
        chunks: "initial"
      },
      minimize: isProd,
      minimizer: [new TerserPlugin({
        terserOptions: {
          keep_classnames: false,
          compress: {
            ecma: "2017",
          },
        }
      })],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.tsx?$/,
          exclude: /node_module/,
          use: {
            loader: 'ts-loader',
            options: {
              instance: 'main',
            }
          }
        },
        evalReplaceRule
      ]
    },
    plugins: [
      new WebpackAssetsManifest({ publicPath: true, output: "manifest.json" }),
      new MiniCssExtractPlugin({
        filename: isProd ? "[name]-[contenthash].css" : "[name].css"
      }),
    ]
  },
  {
    ...devTool,
    mode: isProd ? "production" : "development",
    entry: {
      sw: path.resolve(__dirname, './sw/src/sw.ts'),
    },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/",
      filename: "[name].js",
    },
    optimization: {
      minimize: isProd,
      minimizer: [new TerserPlugin({
        terserOptions: {
          keep_classnames: false,
          compress: {
            ecma: "2017",
          },
        }
      })],
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './sw/tsconfig.json'),
              instance: 'sw',
            },
          }
        },
        evalReplaceRule
      ]
    },
    plugins: [
    ]
  },
]
