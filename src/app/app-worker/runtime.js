export default function getTimeExecution(call) {
    var t0 = performance.now();

    call();
    
    var t1 = performance.now();
    console.log("Function took " + (t1 - t0) + " milliseconds.");
}
