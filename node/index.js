
const algosdk = require('algosdk');

const {PURESTAKE_KEY, PURESTAKE_TESTNET_ALGOD} = process.env;
const client = new algosdk.Algodv2(PURESTAKE_KEY, PURESTAKE_TESTNET_ALGOD);

(async () => {
  console.log(await client.status());
})().catch((e) => {
  console.log(e);
});

