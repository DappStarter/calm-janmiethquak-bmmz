require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food plastic rescue remember coach inner drum front search'; 
let testAccounts = [
"0x4ba96ce1feb65009a6fc82479f8ece1288467b4efdc2d5d1e2522aa1ba156b86",
"0xc0d67177f2d27be6ae6378e66f60a43e7bf09a1edb9c92d181e9675ef8a58e4a",
"0xdc55531b8e210d89227e7cfbb4f4055b3c075c489305d1934462dcda185a1cae",
"0x59998c3372cdb85a1bbd821edf0cf280cf8c33130edc35965f9547ffa8c6a623",
"0xb67f3bb7ab52e89a7e80d663a04d61aad895270e1e9c7a7b2c82ea455c972cff",
"0x40f8ab700091cc99f6d498cf0b9c23526f5eeffae90c4a70059967eb4f81d2a1",
"0xd121d48860536bff28d68f34caba5f84e74d5c5ce49e4e21861cab26dfa49f00",
"0xb75c485ace50715a547dd85aceebf0ecc9be7898c648e6118106da015fb40d8a",
"0x738fb7d4d44afbd0153e02ad76adb1599e6959fb9fbb2837742bd0075ac256eb",
"0xce2df69bee1f0528fbad4af01bbceb2c43704b2b63e8bd053d9823e59d0e4ad6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

