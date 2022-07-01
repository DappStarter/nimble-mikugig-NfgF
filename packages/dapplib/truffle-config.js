require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan repeat pizza huge guess enroll slot genuine'; 
let testAccounts = [
"0x29095b726900150d0966455214b26dc476dfdef1f3d0394ef5a4e4ac975ffbb7",
"0x7a0bfdfdb5051daa14efe475b91951ee758ea15a69d17af1073671e0b2d21678",
"0xb684223b79ec7529c94bbd6bdb69445d26cd27ea2196c2e170a99dd4a9b8e795",
"0x84b3c2e4e632d5fb1f91ec238f8400d6464b6054dbd619b43053c49bab02048b",
"0x194a417427a3c0d44df2ac210d6de9c7a5f0a61806e7bb0690d2c39ea4750948",
"0x97e96d4c3a8d07959df765e56d351c3ea608d4eef8c4c0e4836478d8cff46d43",
"0xd959ae51d077c5ce1055dda255d1189580a9e47a528dc4dc97dc1c43b55d40e5",
"0x0386f01a6e6cd6437685734f2670799309d8065743a3da73e15f25e192b5d0f1",
"0xe6d04ba59621895e498f4cb896e352bdbd54861ff4d7c5a2ce12cab9080fb7a0",
"0x15184f9e53d5be909761cfcfac90c7b98708a5bc40b65e1181ed4153504cff2d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


