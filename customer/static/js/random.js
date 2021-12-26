let keyvalue = document.getElementById('keyvalue');
let keygen = document.getElementById('keygen');


keygen.addEventListener('click', () =>{
  keyvalue.textContent = create_random_string()
})




function create_random_string(string_length){
  var random_strings = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
  for(var i, i=0; i< 10; i++){
    random_strings += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return random_strings
}
