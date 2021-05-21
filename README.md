# Simple algosdk & purestake.io tests

Some basic setups for testing `algosdk` and purestake.io using both `node` and `deno`

## Setup

Assign following environment variables:

```bash
export PURESTAKE_KEY=KNI...snip...z3D
export PURESTAKE_TESTNET_ALGOD=https://testnet-algorand.api.purestake.io/ps2
```

When running each example, if all is well you should see something like:

```
Status {
  c: HTTPClient {
    defaultHeaders: {},
    intDecoding: 'default',
    baseURL: {
      slashes: true,
      protocol: 'https:',
      hash: '',
      query: '',
      pathname: '/ps2',
      auth: '',
      host: 'testnet-algorand.api.purestake.io:4180',
      port: '4180',
      hostname: 'testnet-algorand.api.purestake.io',
      password: '',
      username: '',
      origin: 'https://testnet-algorand.api.purestake.io:4180',
      href: 'https://testnet-algorand.api.purestake.io:4180/ps2'
    },
    tokenHeader: { 'X-Algo-API-Token': 'KNI...snip...z3D' }
  },
  query: {},
  intDecoding: 'default'
}
```
