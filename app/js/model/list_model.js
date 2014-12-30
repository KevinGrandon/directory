import { Model } from 'components/fxos-mvc/mvc';

export default class ListModel extends Model {
	getAppList() {
		return {
			'contacts': {
				//zip: 'https://api.github.com/repos/fxos/contacts/releases/assets/359996',
				//manifest: 'https://api.github.com/repos/fxos/contacts/releases/assets/360064',
				zip: 'http://static.henretty.us/app.zip',
				manifest: 'http://static.henretty.us/manifest.webapp',

				url: 'https://github.com/fxos/contacts'
			}
		};
	}
}
