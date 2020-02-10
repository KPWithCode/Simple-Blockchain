const { SHA256} = require('crypto-js');

class Block {
    constructor(data,index,timestamp = String(newDate())) {
        this.date = data
        this.index = index
        this.timestamp = timestamp
        this.hash = this.calculateHash();
    }
    // Hashing Algorithm
    calculateHash() {
        return SHA256(JSON.stringify(this.data) + this.index + this.timestamp).toString()
    }

}

module.exports = Block
