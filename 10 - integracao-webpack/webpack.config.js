const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  module: "production", // pode ser 2 tipos: development ou production
  entry: "./src/main.ts", // a partir de qual arquivo o webpack vai começar a buscar os arquivos
  output: {
    // na hora de exportar os arquivos
    filename: "app.min.js", // o nome do arquivo que será gerado
    path: path.join(__dirname, "dist"), // a localização do arquivo
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ], // esse plugin copia os arquivos de public para o diretório dist
  resolve: {
    extensions: [".ts", ".js"], // extensões que o webpack vai procurar
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // qualquer arquivo que tenha a extensão js serão processados por essa regra
        use: "ts-loader", // qual loader vai ser usado, que é responsavel por ler o arquivo ts e transformar em js
        exclude: /node_modules/, // não vai ser processado os arquivos que estão na pasta node_modules
      },
    ],
  },
};
