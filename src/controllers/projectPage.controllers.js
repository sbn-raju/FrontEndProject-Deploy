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
        res.render("Counter.ejs");
      } catch (err){
        console.log(err);
      }
      break;
    case "6":
      try {
        res.render("Forms.ejs");
      } catch (err) {
        console.error(err);
      }
      break;
    case "7":
      try {
        res.render("GuessNumber.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    case "8":
      try {
        res.render("Portfolio.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    case "9":
        try{
          res.render("RockPaperScissors.ejs");
        }catch(err){
            console.log();}
        break;
    case "10":
        try {
          res.render("TicTacToe.ejs");
        } catch (err) {
          console.log("");
        }
        break;
     case "11":
      try {
        res.render("BgChanger.ejs");
      } catch (err) {
        console.log("");
      }
      break;
    case "12":
      try {
        res.render("printWeekDays.ejs");
      } catch (err) {
        console.log("");
      }
      break;
  }
};
module.exports = getprojectPageContorller;
