import { createMessageHandler } from '../lib/environment/_helpers';

const {
	_handleMessage,
	sendMessage,
	addListener,
	addInterceptor
} = createMessageHandler((type, obj) => self.postMessage({ ...obj, type }));

self.on('message', ({ type, ...obj }) => {
	_handleMessage(type, obj);
});

export {
	sendMessage,
	addListener
};

addInterceptor('permissions', () => {});
