const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

const superbowlWin = function(array) { 
    // if (result === "W") {

    // // } else {
    //     return undefined
    // }
   
    // let yearChiefsWon = array.find(({result}) => {
    //     return (result === "W")
    // });
    // if yearChiefsWon
    // return yearChiefsWon.year;

    //Keep track in the event that find doesn't 
    //find anything
    let yearChiefsWon = array.find(({result}) => {
        return (result === "W")
    });
    console.log(yearChiefsWon); 
    if (yearChiefsWon === undefined) {
        return yearChiefsWon;
    } 
    else if (yearChiefsWon.result === "W") {
        return yearChiefsWon.year;  
    } 
        
    }
    // } elseif (yearChiefsWon.result !== "W") {
    //     return undefined;



console.log(superbowlWin(record));