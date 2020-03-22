// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	app: {
		name: 'LANA Business Directory',
		subtitle: 'Admin Portal',
		slogan: 'Admin Portal'
	},
	fire: {
		auth: {
			apiKey: "AIzaSyAC261wN0wwuNdgm9py8iXMxUGg0y5GBpw",
			authDomain: "lana-business-directory.firebaseapp.com",
			databaseURL: "https://lana-business-directory.firebaseio.com",
			projectId: "lana-business-directory",
			storageBucket: "lana-business-directory.appspot.com",
			messagingSenderId: "773896215295",
			appId: "1:773896215295:web:f8ae46c2271ff6793b8aca",
			measurementId: "G-NP01BMCSSS"
		}
	},
	s3: {
		accessKeyId: 'AKIAJY6GD4REGAP7BPHQ',
		secretAccessKey: '',
		bucket: 'dev.appseed.io/mobile-apps/businessdirectory-frb-admin'
	}
};
