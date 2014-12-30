import { Controller } from 'components/fxos-mvc/mvc';

import ListModel from 'js/model/list_model';
import ListView from 'js/view/list_view';

export default class ListController extends Controller {
	constructor() {
		this.model = new ListModel();
		this.view = new ListView();
		document.body.appendChild(this.view.el);
	}

	main() {
		this.appList = this.model.getAppList();
		this.view.render(this.appList);

		var buttons = this.view.getInstallButtons();
		buttons.forEach((button) => {
			button.el.addEventListener('click',
			  this.installApp.bind(this, button.manifest, button.zip));
		});
	}

	installApp(manifest, zip) {
		var installReq = navigator.mozApps.installPackage(manifest);
		installReq.onerror = function(err) {
			console.log('install error', err);
		};
		installReq.onsuccess = function() {
			console.log('installed');
		};

		//var req = new XMLHttpRequest();
		//req.open('GET', manifest);
		////req.setRequestHeader('Content-Type', 'application/json');
		//req.responseType = 'json';
		//req.send();
		//req.onload = function() {
		//	if (this.status === 200) {
		//		//var appBlob = new Blob([this.response], { type: 'application/octet-binary' });
		//		console.log('got this far', this.response);

		//		//var installReq = navigator.mozApps.mgmt.extractManifest(appBlob);
		//		console.log('got somewhere else');
		//		installReq.onerror = function(err) {
		//			console.log('install error', err);
		//		};
		//		installReq.onsuccess = function() {
		//			console.log('installed');
		//		};
		//	}

		//};

		//window.onerror = function(err) {
		//	console.log('fuck', err);
		//};

		//req.onload = evt => {
		//	console.log('got data', evt.response);
		//};
	}
}
