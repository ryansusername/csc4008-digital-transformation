# Quasar App
Smart building web app built with quazar.

# Prerequisits
* [nodejs](https://nodejs.org/en/) - Javascript Runtime
* [npm](https://www.npmjs.com) - Package Manager
* [webstorm](https://www.jetbrains.com/webstorm/) - Intelligent IDE

# How to Run
_**Note**: There are some dependencies that npm will not install, therefore use an intelligent IDE such as Jet Brain's Webstorm and perform the following operations inside the IDE terminal._

Ensure you have `npm` installed. You can verify using `npm --version` or install like below.

```commandline
sudo apt install npm

```

`npm` must also be a version later than v.8 for quasar to work correctly. The version can be updated on Linux with the below command.

```commandline
    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable
```

Install all packages from project room with the following.
```commandline
cd ./smartbuilding/
npm install
```

Host the app at localhost:3000 with the following.
```commandline
quasar dev
```

# Developing
## Components
Add a `component.js` file to `/src/components`

In the `script` of a `.vue` file, add for example:
```
import component from 'src/components/component.js'

export default {
  name: 'PageIndex',
  components: {
    component
  }
}
```
