// By Bam
// Simple helper function that takes in an object (with any dept of object tree)
// and creates a dictionary array based on key/values
// If there's a subtree object, the parent tree key name will be added prefixed by "_" to key name

let output = [];

var data = { 
    foo:"bar",
    baz: 1,
    bazz: 1.001,
    arr:[1,2,3],
    arrString: ["1","2","3"],
    subo: {
        foo2:"bar2",
        bar2: 2,
        subo2: {
          foo3: "bar3",
          bar3: 3
        }
    }
};


//called with every property and its value
function process(key,value) {
  const dict = key + " : "+value;
  output.push([dict]);
}

function traverse(obj,func, tree = '') {
    for (var i in obj) {
        if (obj[i] !== null && typeof(obj[i])!="object") {
          func.apply(this,[tree + i,obj[i]]);  
        } else if (obj[i] !== null && typeof(obj[i])=="object") {
            //going one step down in the object tree!!
            traverse(obj[i],func, i+"_");
        }
    }
}

traverse(data,process);
console.log(output);
