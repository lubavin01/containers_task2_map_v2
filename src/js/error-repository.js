export default class ErrorRepository {
  constructor() {
    this.repo = new Map([[1, 'error'],[2, 'critical error' ], [10, 'super critical error' ]]);
  }

  translate(code) {
    if (this.repo.has(code)) {
      return this.repo.get(code);
    }

    return 'Unknown error';
  }
}