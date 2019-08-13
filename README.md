Installation

Clone Repository

Run following to install Webpacker

```bash
$ bundle
```
```bash
$ bundle exec rails webpacker:install
```

Install Reactjs

```bash
$ bundle exec rails webpacker:install:react
```

Install Typescript. Make sure yarn is installed on your system.

```bash
$ bundle exec rails webpacker:install:typescript
```
```bash
$ yarn add @types/react @types/react-dom
```

Entry point for your typescript files are located in app/javascript/packs.

To run webpack, and start watching and compiling SASS and Typescript Files:

```bash
./bin/webpack --watch --colors --progress
````
or if your on windows
```bash
ruby ./bin/webpack --watch --colors --progress
````

<---Linting---> (TypeScript Linting)
Install TsLint
```bash
yarn global add tslint
````
Generate a tslint.json config file
```bash
tslint -i
````
Install TsLint Config Airbnb
```bash
yarn add tslint-config-airbnb --save
````
in your tslint.json
```bash
{
  "extends": "tslint-config-airbnb"
}
````
To apply TS linting, on your project directory
```bash
tslint app/**/*.ts{,x}
````
<---Linting---> (Ruby Linting)
```bash
bundler install
````
To run, go to the directory you wish to apply Ruby linting then
```bash
rubocop
````
