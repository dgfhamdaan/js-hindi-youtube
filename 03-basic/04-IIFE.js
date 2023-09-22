// Immediately Invoked Function Expressions IIFE
// FOR globe scope popution to reduce we use IIIFE  

//() uses as block

(function chai() {
    //name IIIFE it have a name
    console.log(`DB connected`);
}) (); 

// () first block is use for function and two block is uses for exution like chai() use ; after this

( (name)=> {
    //simple/unnamed IIFE because it not have a name
  console.log(`DB connected two ${name}`);
})("hamdaan");