// question 44 
// make sandwich summary

function makesandwich(item: string[]){
    console.log(`\nMaking your sandwich with:`);

    item.forEach(element => console.log("- " + element));

    console.log("Enjoy your sandwich!\n");
}

makesandwich([`Ham`,`cheese`,`lettuce`]);
makesandwich([`Turker`,`Bacon`]);
makesandwich([`peanut`,`butter`,`jelly`]);