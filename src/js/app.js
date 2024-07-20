export default class ErrorRepository {
	constructor(...errors) {
		this.errorBase = new Map();
		errors.forEach((error) => this.errorBase.set(error.code, error.description));
	}

	translate(code) {
		if (!this.errorBase.has(code)) {
			return 'Unknown error';
		}
		return this.errorBase.get(code);
	}
}