// takes an array and groups each item with a few more items

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var data = [];
const groupNum = 11;

start();

function start() {
    data = list.map(process);

    console.log(data);
}

function process(v, indx, obj) {
    let entry = {};
    let item = [];

    item.push(v);

    for (let i = 1; i <= groupNum; i++) {
        const range = indx + i;
        // console.log('range: ', range);
        // console.log('index: ', indx);
        // console.log('length: ', obj.length);
        if (range < obj.length) {
            item.push(obj[range]);
        } else {
            const newRange = obj.length - i-1;
            if (newRange >= 0) {
                item.push(obj[newRange]);
            }
        }
    }

    entry.ins = item;
    return entry;
}