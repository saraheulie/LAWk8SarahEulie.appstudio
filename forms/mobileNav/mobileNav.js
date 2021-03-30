
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else {
       switch(s) {
          case "Dessert Voting":
                // Go to the Overview form
            ChangeForm(dessertVoting)
            break
          case "Describe You":
                // Go to the Overview form
            ChangeForm(describeYou)
            break
          case "Fav Exercises":
                // Go to the Overview form
            ChangeForm(favExercises)
            break
          case "Mobile Nav":
                // Go to the Overview form
            ChangeForm(mobileNav)
            break
       }  //switch
   } //else
}
 