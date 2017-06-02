import { resolve, join } from 'path';

interface PlatformLocations {
  root: string;
  www: string;
  res: string;
  platformWww: string;
  configXml: string;
  defaultConfigXml: string;
  build: string;
  cordovaJs: string;
  cordovaJsSrc: string;
}

interface PlatformVersion {
  version: string
}

interface PlatformInfo {
  locations: PlatformLocations;
  root: string;
  name: string;
  version: PlatformVersion;
  projectConfig: any;
}

export = class Api {

  platform: string = 'electron';
  root: string = resolve(__dirname, '..');
  locations: PlatformLocations = {
    root: this.root,
    www: join(this.root, 'assets/www'),
    res: join(this.root, 'res'),
    platformWww: join(this.root, 'platform_www'),
    configXml: join(this.root, 'config.xml'),
    defaultConfigXml: join(this.root, 'cordova/defaults.xml'),
    build: join(this.root, 'build'),
    cordovaJs: join(this.root, 'bin/templates/project/assets/www/cordova.js'),
    cordovaJsSrc: join('cordova-js-src')
  };

  static createPlatform(dest: string, config: any, options: any, events: any) {

  }

  static updatePlatform(dest: string, options: any, events: any) {

  }

  getPlatformInfo(): PlatformInfo {
    return;
  }

  prepare(): void {

  }

  addPlugin() {

  }

  removePlugin() {

  }

  build() {

  }

  run() {

  }

  clean() {

  }

  requirements() {

  }

}
