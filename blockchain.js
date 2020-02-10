const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.genesisBlock()]
    }
    // First block
    genesisBlock() {
        const genesisDate = '02/10/2020'
        return new Block('Genesis Block',0,genesisDate, '0')
    }
    // last block that was created
    latestBlock() {
        return this.chain[this.chain.length - 1]

    }
    addNewBlock(newBlock) {
        // previous Hash
        newBlock.previousHash = this.latestBlock().hash
        // position of new block
        newBlock.index = this.latestBlock().index + 1;
        // Creates hash for new block
        newBlock.hash = newBlock.calculateHash();
        // Push newly created block on top of chain
        this.chain.push(newBlock)
    }
}

let AddBlocks = 5

const KChain = new Blockchain()
// populated this chain
for( i = 0; i< AddBlocks; i++) {
    // Pass data in json format because it's easier to parse and read
    KChain.addNewBlock(new Block({sender: 'KP', receiver: 'MY', message: `Block ${KChain.chain.length} has been added to the chain`}))
}
// Console.logs every block
KChain.chain.forEach((block) => {
    console.log(block)
})