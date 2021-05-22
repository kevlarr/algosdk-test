import * as algo from 'algosdk';
import { Injectable } from '@nestjs/common';

const {PURESTAKE_KEY, PURESTAKE_TESTNET_ALGOD} = process.env;

@Injectable()
export class AppService {
  async getAlgodStatus(): Promise<string> {
    const client = new algo.Algodv2(PURESTAKE_KEY, PURESTAKE_TESTNET_ALGOD);
    
    return JSON.stringify(await client.status());
  }
}
