
const doTwice = (a,callback) => {
    console.log(a);
    callback();
    callback();
}

const learning = () => {
    console.log("writing this twice");

}

doTwice(2,learning);
