dependencies
    1- npm init -y

    2- npm i typescript ts-node-dev @types/node tsconfig-paths ts-node -D

    3- npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

    //Biblioteca para organizar o cod
    4- npm i -D eslint @typescript-eslint-parser @typescript-eslint/eslint-plugin
    obs: instalar a versão 08:
      npm intall -D eslint@08

    5- npm i express cors express-async-errors
    obs: só roda em java precisa da biblioteca para rodar em typeScript
      npm i -D @types/express @types/cors

    6- npm i typeorm reflect-metadata pg

Extensions VsCode
    1- EditorConfig for VS Code
    2- VsCode Icons
