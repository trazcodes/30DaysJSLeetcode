var createCounter = function(init) {
    var initt=init;
    return {
        increment : ()=>{
            ++init;
            return init;
        },
        decrement : ()=>{
            --init;
            return init;
        },
        reset : ()=>{
            init=initt;
            return init;
        }
    }
};