rdoPersonality.onchange=function(){
  let userChoice = $("input[name=rdoPersonality]:checked").prop("value") // Puts answer in a variable

   if (rdoPersonality.value == 0)   // picked the first choice
      lblMessage2.value = `I would agree that you are a '${userChoice}' person too!`
   if (rdoPersonality.value == 1)   // picked the second choice
      lblMessage2.value = `I would agree that you are a '${userChoice}' person too!`
   if (rdoPersonality.value == 2)   // picked the third choice
      lblMessage2.value = `I would agree that you are a '${userChoice}' person too!`
   else  //picked the fourth choice
      lblMessage2.value = `I would agree that you are a '${userChoice}' person too!`
}


btnFavExercises.onclick=function(){
  ChangeForm(favExercises)
}

