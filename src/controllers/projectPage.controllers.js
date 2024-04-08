const getprojectPageContorller = (req, res) => {
  let projectID = req.params.id;
  switch(projectID){
    case "1":
      try {
        res.render("areaAndPerimeter.ejs");
      } catch (err){
        res.render("error.ejs");
      }
      break;
    case "2":
      try {
        res.render("billSpliter.ejs");
      } catch (err){
        console.log(err);
      }
      break;
    case "3":
      try {
        res.render("BMICalculator.ejs");
      } catch (error){
        console.log(err);
      }
      break;
    case "4":
      try {
        res.render("ColourGenetor.ejs");
      } catch (err){
        console.log(err);
      }
      break;
    case "5":
      try {
        req.render("Counter.ejs");
      } catch (err){
        console.log(err);
      }
      break;
    case "6":
      try {
        console.log("Forms.ejs");
      } catch (err) {
        console.error(err);
      }
      break;
    case "7":
      try {
        console.log("GuessNumber.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    case "8":
      try {
        console.log("Portfolio.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    case "9":
        try{
            console.log("RockPaperScissors.ejs");
        }catch(err){
            console.log();}
        break;
    case "10":
        try {
            console.log("TicTacToe.ejs");
        } catch (err) {
          console.log("");
        }
        break;
     case "11":
      try {
        console.log("BgChanger.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    case "12":
      try {
        console.log("printWeekDays.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    
  }
};
module.exports = getprojectPageContorller;
