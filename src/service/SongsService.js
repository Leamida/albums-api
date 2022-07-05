const { Pool } = require('pg');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }
}
