# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

``` Working With local Console
(base) aditya@aditya-Mi-NoteBook-Horizon-Edition-14:~/Vs_Code/github/FreeCodeCamp/Blockchain_Hardhat$ yarn hardhat console --network polygon
yarn run v1.22.19
warning ../../../../package.json: No license field
$ /home/aditya/Vs_Code/github/FreeCodeCamp/Blockchain_Hardhat/node_modules/.bin/hardhat console --network polygon
WARNING: You are using a version of Node.js that is not supported, and it may work incorrectly, or not work at all. See https://hardhat.org/nodejs-versions


Welcome to Node.js v19.4.0.
Type ".help" for more information.
> const SimpleStorageFac = await ethers.getContractFactory("SimpleStorage")
undefined
> const simpleStorage = await SimpleStorageFac.deploy()
undefined
> console.log(simpleStorage.address)
0x1F813bf2A37922Fd7F35Cdff7C2F7EFa789f0D0e
undefined
> console.log(network.name)
polygon
undefined
> console.log(network.config.chainId)
80001
undefined
> console.log(simpleStorage)
Contract {
  interface: Interface {
    fragments: [
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment]
    ],
    _abiCoder: AbiCoder { coerceFunc: null },
    functions: {
      'addPerson(string,uint256)': [FunctionFragment],
      'nameToFavoriteNumber(string)': [FunctionFragment],
      'people(uint256)': [FunctionFragment],
      'retrieve()': [FunctionFragment],
      'store(uint256)': [FunctionFragment]
    },
    errors: {},
    events: {},
    structs: {},
    deploy: ConstructorFragment {
      name: null,
      type: 'constructor',
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      gas: null,
      _isFragment: true
    },
    _isInterface: true
  },
  provider: EthersProviderWrapper {
    _isProvider: true,
    _events: [],
    _emitted: { block: -2 },
    disableCcipRead: false,
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise {
      [Object],
      [Symbol(async_id_symbol)]: 65,
      [Symbol(trigger_async_id_symbol)]: 13
    },
    _maxInternalBlockNumber: 33641163,
    _lastBlockNumber: -2,
    _maxFilterBlockRange: 10,
    _pollingInterval: 4000,
    _fastQueryDate: 1679942158260,
    connection: { url: 'http://localhost:8545' },
    _nextId: 42,
    _hardhatProvider: BackwardsCompatibilityProviderAdapter {
      _wrapped: [ChainIdValidatorProvider],
      _provider: [ChainIdValidatorProvider],
      sendAsync: [Function: bound sendAsync],
      send: [Function: bound send],
      _sendJsonRpcRequest: [Function: bound _sendJsonRpcRequest] AsyncFunction
    },
    _eventLoopCache: { detectNetwork: null },
    _network: {
      name: 'maticmum',
      chainId: 80001,
      ensAddress: null,
      _defaultProvider: null
    },
    _internalBlockNumber: Promise {
      [Object],
      [Symbol(async_id_symbol)]: 486,
      [Symbol(trigger_async_id_symbol)]: 479
    },
    _fastBlockNumber: 33641163,
    _fastBlockNumberPromise: Promise {
      33641163,
      [Symbol(async_id_symbol)]: 596,
      [Symbol(trigger_async_id_symbol)]: 486
    }
  },
  signer: SignerWithAddress {
    _isSigner: true,
    address: '0x660357D33DDb1A7f728618163a90d76b96664884',
    _signer: JsonRpcSigner {
      _isSigner: true,
      provider: [EthersProviderWrapper],
      _address: '0x660357D33DDb1A7f728618163a90d76b96664884',
      _index: null
    },
    provider: EthersProviderWrapper {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      disableCcipRead: false,
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 33641163,
      _lastBlockNumber: -2,
      _maxFilterBlockRange: 10,
      _pollingInterval: 4000,
      _fastQueryDate: 1679942158260,
      connection: [Object],
      _nextId: 42,
      _hardhatProvider: [BackwardsCompatibilityProviderAdapter],
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 33641163,
      _fastBlockNumberPromise: [Promise]
    }
  },
  callStatic: {
    'addPerson(string,uint256)': [Function (anonymous)],
    'nameToFavoriteNumber(string)': [Function (anonymous)],
    'people(uint256)': [Function (anonymous)],
    'retrieve()': [Function (anonymous)],
    'store(uint256)': [Function (anonymous)],
    addPerson: [Function (anonymous)],
    nameToFavoriteNumber: [Function (anonymous)],
    people: [Function (anonymous)],
    retrieve: [Function (anonymous)],
    store: [Function (anonymous)]
  },
  estimateGas: {
    'addPerson(string,uint256)': [Function (anonymous)],
    'nameToFavoriteNumber(string)': [Function (anonymous)],
    'people(uint256)': [Function (anonymous)],
    'retrieve()': [Function (anonymous)],
    'store(uint256)': [Function (anonymous)],
    addPerson: [Function (anonymous)],
    nameToFavoriteNumber: [Function (anonymous)],
    people: [Function (anonymous)],
    retrieve: [Function (anonymous)],
    store: [Function (anonymous)]
  },
  functions: {
    'addPerson(string,uint256)': [Function (anonymous)],
    'nameToFavoriteNumber(string)': [Function (anonymous)],
    'people(uint256)': [Function (anonymous)],
    'retrieve()': [Function (anonymous)],
    'store(uint256)': [Function (anonymous)],
    addPerson: [Function (anonymous)],
    nameToFavoriteNumber: [Function (anonymous)],
    people: [Function (anonymous)],
    retrieve: [Function (anonymous)],
    store: [Function (anonymous)]
  },
  populateTransaction: {
    'addPerson(string,uint256)': [Function (anonymous)],
    'nameToFavoriteNumber(string)': [Function (anonymous)],
    'people(uint256)': [Function (anonymous)],
    'retrieve()': [Function (anonymous)],
    'store(uint256)': [Function (anonymous)],
    addPerson: [Function (anonymous)],
    nameToFavoriteNumber: [Function (anonymous)],
    people: [Function (anonymous)],
    retrieve: [Function (anonymous)],
    store: [Function (anonymous)]
  },
  filters: {},
  _runningEvents: {},
  _wrappedEmits: {},
  address: '0x1F813bf2A37922Fd7F35Cdff7C2F7EFa789f0D0e',
  resolvedAddress: Promise {
    '0x1F813bf2A37922Fd7F35Cdff7C2F7EFa789f0D0e',
    [Symbol(async_id_symbol)]: 1079,
    [Symbol(trigger_async_id_symbol)]: 462
  },
  'addPerson(string,uint256)': [Function (anonymous)],
  'nameToFavoriteNumber(string)': [Function (anonymous)],
  'people(uint256)': [Function (anonymous)],
  'retrieve()': [Function (anonymous)],
  'store(uint256)': [Function (anonymous)],
  addPerson: [Function (anonymous)],
  nameToFavoriteNumber: [Function (anonymous)],
  people: [Function (anonymous)],
  retrieve: [Function (anonymous)],
  store: [Function (anonymous)],
  deployTransaction: {
    hash: '0x2f3ff5c92fc6ebb4b4814c6275b5a89bd9b05f21cf74ba4bd2bf35f8cd05d565',
    type: 2,
    accessList: [],
    blockHash: null,
    blockNumber: null,
    transactionIndex: null,
    confirmations: 0,
    from: '0x660357D33DDb1A7f728618163a90d76b96664884',
    gasPrice: BigNumber { value: "1500000033" },
    maxPriorityFeePerGas: BigNumber { value: "1500000015" },
    maxFeePerGas: BigNumber { value: "1500000033" },
    gasLimit: BigNumber { value: "562541" },
    to: null,
    value: BigNumber { value: "0" },
    nonce: 76,
    data: '0x608060405234801561001057600080fd5b5061093b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e64cec11461005c5780636057361d1461007a5780636f760f41146100965780638bab8dd5146100b25780639e7a13ad146100e2575b600080fd5b610064610113565b60405161007191906102b2565b60405180910390f35b610094600480360381019061008f919061030d565b61011c565b005b6100b060048036038101906100ab9190610480565b610126565b005b6100cc60048036038101906100c791906104dc565b6101af565b6040516100d991906102b2565b60405180910390f35b6100fc60048036038101906100f7919061030d565b6101dd565b60405161010a9291906105a4565b60405180910390f35b60008054905090565b8060008190555050565b6001604051806040016040528083815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101908161018591906107e0565b5050508060028360405161019991906108ee565b9081526020016040518091039020819055505050565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600181815481106101ed57600080fd5b906000526020600020906002020160009150905080600001549080600101805461021690610603565b80601f016020809104026020016040519081016040528092919081815260200182805461024290610603565b801561028f5780601f106102645761010080835404028352916020019161028f565b820191906000526020600020905b81548152906001019060200180831161027257829003601f168201915b5050505050905082565b6000819050919050565b6102ac81610299565b82525050565b60006020820190506102c760008301846102a3565b92915050565b6000604051905090565b600080fd5b600080fd5b6102ea81610299565b81146102f557600080fd5b50565b600081359050610307816102e1565b92915050565b600060208284031215610323576103226102d7565b5b6000610331848285016102f8565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61038d82610344565b810181811067ffffffffffffffff821117156103ac576103ab610355565b5b80604052505050565b60006103bf6102cd565b90506103cb8282610384565b919050565b600067ffffffffffffffff8211156103eb576103ea610355565b5b6103f482610344565b9050602081019050919050565b82818337600083830152505050565b600061042361041e846103d0565b6103b5565b90508281526020810184848401111561043f5761043e61033f565b5b61044a848285610401565b509392505050565b600082601f8301126104675761046661033a565b5b8135610477848260208601610410565b91505092915050565b60008060408385031215610497576104966102d7565b5b600083013567ffffffffffffffff8111156104b5576104b46102dc565b5b6104c185828601610452565b92505060206104d2858286016102f8565b9150509250929050565b6000602082840312156104f2576104f16102d7565b5b600082013567ffffffffffffffff8111156105105761050f6102dc565b5b61051c84828501610452565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561055f578082015181840152602081019050610544565b60008484015250505050565b600061057682610525565b6105808185610530565b9350610590818560208601610541565b61059981610344565b840191505092915050565b60006040820190506105b960008301856102a3565b81810360208301526105cb818461056b565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061061b57607f821691505b60208210810361062e5761062d6105d4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610659565b6106a08683610659565b95508019841693508086168417925050509392505050565b6000819050919050565b60006106dd6106d86106d384610299565b6106b8565b610299565b9050919050565b6000819050919050565b6106f7836106c2565b61070b610703826106e4565b848454610666565b825550505050565b600090565b610720610713565b61072b8184846106ee565b505050565b5b8181101561074f57610744600082610718565b600181019050610731565b5050565b601f8211156107945761076581610634565b61076e84610649565b8101602085101561077d578190505b61079161078985610649565b830182610730565b50505b505050565b600082821c905092915050565b60006107b760001984600802610799565b1980831691505092915050565b60006107d083836107a6565b9150826002028217905092915050565b6107e982610525565b67ffffffffffffffff81111561080257610801610355565b5b61080c8254610603565b610817828285610753565b600060209050601f83116001811461084a5760008415610838578287015190505b61084285826107c4565b8655506108aa565b601f19841661085886610634565b60005b828110156108805784890151825560018201915060208501945060208101905061085b565b8683101561089d5784890151610899601f8916826107a6565b8355505b6001600288020188555050505b505050505050565b600081905092915050565b60006108c882610525565b6108d281856108b2565b93506108e2818560208601610541565b80840191505092915050565b60006108fa82846108bd565b91508190509291505056fea2646970667358221220de37b6402310d1d7186b2657c53a09a4ed48ea17112d6983ae02822c31aa28ba64736f6c63430008120033',
    r: '0x52ce97d477e2b7a7f2dd63376abbb16931caf8d074b03009f44a4eb433a85eab',
    s: '0x2b30079e068e49096ecae16d987acbd45ad471e7b8c01991f6967502e6b84b5c',
    v: 0,
    creates: '0x1F813bf2A37922Fd7F35Cdff7C2F7EFa789f0D0e',
    chainId: 80001,
    wait: [Function (anonymous)]
  }
}
undefined
> simpleStorage.retrieve()
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 1822,
  [Symbol(trigger_async_id_symbol)]: 13
}
> await simpleStorage.retrieve()
BigNumber { value: "0" }
> await simpleStorage.store("738298")
{
  hash: '0xa025cd247336d8ee6aa4d921232e42b2a84aaace4838ab7dbb5c9fe3615a770b',
  type: 2,
  accessList: [],
  blockHash: null,
  blockNumber: null,
  transactionIndex: null,
  confirmations: 0,
  from: '0x660357D33DDb1A7f728618163a90d76b96664884',
  gasPrice: BigNumber { value: "1600000019" },
  maxPriorityFeePerGas: BigNumber { value: "1599999999" },
  maxFeePerGas: BigNumber { value: "1600000019" },
  gasLimit: BigNumber { value: "43748" },
  to: '0x1F813bf2A37922Fd7F35Cdff7C2F7EFa789f0D0e',
  value: BigNumber { value: "0" },
  nonce: 77,
  data: '0x6057361d00000000000000000000000000000000000000000000000000000000000b43fa',
  r: '0xd8e5c09c408e75fedc1a666326cf364b114a8ef26237cf46d407c21ac1e5975e',
  s: '0x15e88c69bfb74894ee83b5b0025501e98c1194a89759b868c98a3696f4aa6027',
  v: 1,
  creates: null,
  chainId: 80001,
  wait: [Function (anonymous)]
}
> await simpleStorage.retrieve()
BigNumber { value: "738298" }
> 
Done in 306.59s.


```
