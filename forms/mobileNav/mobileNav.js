
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else {
       switch(s) {
          case "Dessert Voting":
                // Go to the Dessert Voting form
            ChangeForm(dessertVoting)
            break
          case "Describe You":
                // Go to the Describe You form
            ChangeForm(describeYou)
            break
          case "Fav Exercises":
                // Go to the Fav Exercises form
            ChangeForm(favExercises)
            break
          case "Mobile Nav":
                // Go to the Mobile Nav form
            ChangeForm(mobileNav)
            break
       }  //switch
   } //else
}
 