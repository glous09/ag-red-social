

//=============Validacion de Login===========
function valida_login(){
  //Validamos un campo o área de texto, por ejemplo el campo usuario

  if (document.form.username.value=='Layla' && document.form.password.value=='BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va'){
    /*document.form.submit("index.html");*/
    window.location="../views.html"
    /*window.location="../views/aqp2016-2.html";*/
  }
  else{
    alert("Por favor ingrese, nombre de usuario y contraseña correctos.");
  }
}



//==========Traer elementos del html========================
var container = document.getElementById('container');
var button = document.getElementById('button');
var textarea = document.getElementById('message');
var span = document.getElementById("counter");

//Crear Elementos
var containerpost = document.createElement('section');
//Agregar eventos
button.addEventListener('click', showPost);
textarea.addEventListener('keyup', toDisable);//desabilitar boton


function toDisable(){
  event.preventDefault();
  var counter = textarea.value.length;
  //desabilitar boton
  if (counter == 0 || counter >= 141){
    button.disabled = true;
  }else{
    button.disabled = false;
  }
}

function clear(){
  textarea.value = '';
  textarea.setAttribute('placeholder','¿Qué estás pensando?');
  counter.textContent = '140';
}

function showPost(event){
  event.preventDefault();
  var post = textarea.value;//variable que guarda el mensaje del usuario
  var postParagraph = document.createElement('p');//crear Elementos
  var timeParagraph =  document.createElement('p');//contenedor de reloj
  postParagraph.className = "postStyle"
  timeParagraph.className = "timeStyle"

  //agragamos contenido a los Elementos
  var textpost = postParagraph.innerText = post; //agregar el mensaje del usuario como contenido del parrafo

  var d = new Date(); //agregar hora antes del comentario
  var n = d.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  timeParagraph.innerText = n;
  //===========Agregar hijos=====================
  container.appendChild(containerpost);//agregamos como hijo una seccion
  containerpost.appendChild(postParagraph);//a la seccion le agregamos omo hijo el parrafo
  containerpost.insertBefore(timeParagraph, postParagraph);

  clear();//agregar funcion que limpie
  toDisable();

}
//===========Subir imagenes=======================
function init() {
  var inputFile = document.getElementById('inputFile1');
  inputFile.addEventListener('change', showImage, false);
}

function showImage(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    var img = document.getElementById('img1');
    img.src= event.target.result;
  }
  reader.readAsDataURL(file);
}

window.addEventListener('load', init, false);
