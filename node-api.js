module.exports.rando = function (one, two, three, four, five, six, seven, eight){

  if(one == null){
    var one = "Yes";
    var two = "No";
    var three = "Only yes if you work hard!";
    var four = "Work harder = yes";
    var five = "ERR: Try Again";
    var six = "That question remains unanswered";
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(two == null) {
    var two = "No";
    var three = "Only yes if you work hard!";
    var four = "Work harder = yes";
    var five = "ERR: Try Again";
    var six = "That question remains unanswered";
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(three == null) {
    var three = "Only yes if you work hard!";
    var four = "Work harder = yes";
    var five = "ERR: Try Again";
    var six = "That question remains unanswered";
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(four == null) {
    var four = "Work harder = yes";
    var five = "ERR: Try Again";
    var six = "That question remains unanswered";
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(five == null) {
    var five = "ERR: Try Again";
    var six = "That question remains unanswered";
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(six == null) {
    var six = "That question remains unanswered";
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(seven == null) {
    var seven = "No is the only answer I have ever given";
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else if(eight == null) {
    var eight = "Are you crazy, that is not legal!"

    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  } else {
    var values = [one, two, three, four, five, six, seven, eight],
              valueToUse = values[Math.floor(Math.random() * values.length)];
    console.log(valueToUse);
  }

}
