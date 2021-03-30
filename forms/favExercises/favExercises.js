var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

let all_exercises = exercises.concat(coreExercises)


favExercises.onshow=function(){
  selExercises.clear()   
    for (i = 0; i < all_exercises.length; i++) 
          selExercises.addItem(all_exercises[i])
}





btnSubmit.onclick=function(){
  let chosen = [] 
  for (i = 0; i < selExercises.text.length; i++)
     chosen.push((selExercises.text[i]))
     
  if ((chosen.includes('situps')) && (chosen.includes('plank')))
    lblMessage3.value = `You chose situps and planks- those are two core exercises.`
    
  else
    lblMessage3.value = `You did not pick the two core exercises`
}

btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}
