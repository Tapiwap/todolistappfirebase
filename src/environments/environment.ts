// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC2tKsb0fSYCvgW3TVs6vWrcH3TwSAWNq0",
    authDomain: "todolistapp-49aff.firebaseapp.com",
    databaseURL: "https://todolistapp-49aff.firebaseio.com",
    projectId: "todolistapp-49aff",
    storageBucket: "todolistapp-49aff.appspot.com",
    messagingSenderId: "463701123741"
  }
};
