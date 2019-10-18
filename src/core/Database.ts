import { join } from 'path';
import { Connection } from 'typeorm';

import { RepEntity } from '../entities/Rep';
import { RepCooldownEntity } from '../entities/RepCooldown';

export class Database extends Connection {
    public constructor() {
        super({
            type: 'sqlite',
            database: join(__dirname, '..', '..', 'database.sqlite'),
            logging: true,
            entities: [RepEntity, RepCooldownEntity],
            synchronize: true,
        });

        this._connect();
    }

    private async _connect(): Promise<void> {
        await this.connect();
        console.log(`[DATABASE] Connected`);
    }
}
