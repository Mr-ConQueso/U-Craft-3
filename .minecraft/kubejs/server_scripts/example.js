// priority: 0

// Visit the wiki for more info - https://kubejs.com/



/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    event.replaceInput(
        [{mod: 'selfexpression'}, {mod: 'selfexpression_slim'}], // Arg 1: the filter
        'selfexpression:cloth',            // Arg 2: the item to replace
        'etcetera:cotton_flower'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )

    console.log('All recipes executed')
  })



console.info('Loaded Kube.js server scripts)')

