      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */
        let btn_mayusculas = document.getElementById("btn_mayusculas").addEventListener("click", minus)
        function minus(e) {
          e.preventDefault()
          let namesTextArea = document.getElementById("txt_may")
          let names = namesTextArea.value.split(",")
          names.forEach((element, index) => {
            names[index] = element.toLowerCase()
          });
          namesTextArea.value = names.toString()
        }
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */
        let btn_añoshumanos=document.getElementById("btn_añoshumano").addEventListener("click",calculateDogAge)
        function calculateDogAge(e){
          e.preventDefault()
        let edadperro = parseInt(document.getElementById("edad_humano").value)*7
        document.getElementById("edad_perro").value = edadperro
        }

      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */
       let btn_muestra = document.getElementById("btn_muestra").addEventListener("click", muestraPokemons)
  
       function muestraPokemons(e) {
         e.preventDefault()
       //Pokemon 1
         document.getElementById("nombre_poke1").value = Umbreon.nombre
         document.getElementById("especie_poke1").value = Umbreon.especie
         document.getElementById("ataque_poke1").value = Umbreon.ataque
         document.getElementById("defensa_poke1").value = Umbreon.defensa
       //Pokemon 2  
         document.getElementById("nombre_poke2").value = Vaporeon.nombre
         document.getElementById("especie_poke2").value = Vaporeon.especie
         document.getElementById("ataque_poke2").value = Vaporeon.ataque
         document.getElementById("defensa_poke2").value = Vaporeon.defensa
       }
       function Pokemon(nombre, especie, ataque, defensa) {
         this.nombre = nombre
         this.especie = especie
         this.ataque = ataque
         this.defensa = defensa
       }
       let Umbreon = new Pokemon("Umbreon", "Siniestro", 80, 60)
       let Vaporeon = new Pokemon("Vaporeon", "Agua", 60, 75)