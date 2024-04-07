const getprojectPageContorller = (req,res)=>{
    let projectID = req.params.id;
    switch(projectID){
        case "1":
            console.log("Case entered");
            try{
                res.render('areaAndPerimeter.ejs');
            }
            catch(err){
                // console.log(err);
                res.render("error.ejs");
            }            
            break;
        case "2":
            try{
                res.render("billSpliter.ejs");
            }
            catch(err){
                console.log(err);
            }
            break;
        case "3":
            try{
                res.render("error.ejs");
            }
            catch(error){
               console.log("nothing");
            }
            break;
        case "4":
            try{
                res.render("")
            }
            catch(err){
                console.log(err);
            }
            break;
        case "5":
            try{
                req.render("")
            }
            catch(err){
                console.log(err);
            }
            break;
        case "6":
            try{
                console.log("Okay ");
            }
            catch(err){
                console.error(err);
            }
    }
    // res.send("This is should be your projects page");
};
module.exports = getprojectPageContorller;