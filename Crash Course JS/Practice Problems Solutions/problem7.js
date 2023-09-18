//Given an array of integers your solution should find the smallest integer.

array = [34, 15, 88, 2];
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0];
            for(let i = 0; i<args.length; i++){
                if (min > args[i]){
                    min = args[i];
                }
            }
            return min;
    }
    //Optimized
    opfindSmallestInt(args) {
            return Math.min(...args);
    }

}

let smallestIntegerFinder = new SmallestIntegerFinder();

console.log(smallestIntegerFinder.opfindSmallestInt(array));