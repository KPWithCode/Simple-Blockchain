const { SHA256} = require('crypto-js');

class Block {
    constructor(data,index,timestamp = String(new Date()),previousHash) {
        this.date = data
        this.index = index
        this.timestamp = timestamp
        this.hash = this.calculateHash();
        this.previousHash = previousHash
    }
    // Hashing Algorithm
    calculateHash() {
        return SHA256(JSON.stringify(this.data) + this.index + this.timestamp + this.previousHash).toString()
    }

}

module.exports = Block
