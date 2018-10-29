// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    //put in constructor to initializze some code
    //in this case we need an empty array to host our data
    constructor(){
        this.data = [];
    }
    add(record){
        //unshift method allows value to always be added to the front
        this.data.unshift(record);
    }
    remove(){
        return this.data.pop()
    }
}

module.exports = Queue;
