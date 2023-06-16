function main() {
            let ul = document.querySelector('ul')
            // let name = document.querySelector('.name')
            // let gender = document.querySelector('.gender')
            // let height = document.querySelector('.height')

            const [img, name, height, gender, button] = document.querySelectorAll('.character-info>*')


       async function getCharacters () {

            let request = new Request('https://swapi.dev/api/people')
            let response = await fetch(request)
            let data = await response.json()
            // let characters = data.results
            // console.log(characters);

            while(data.next !== null) {
                listAll(data)

                request = new Request(data.next)
                response = await fetch(request)
                data = await response.json()
            }

        }  
        function listAll(data) {
            data.results.forEach(character=> {

            
            let li = document.createElement('li')
            li.innerHTML = character.name
            ul.append(li)

            li.addEventListener('click', () =>{
                display(character)
            } )
        }
        
            
            )}
            function display(character) {
                
                name.textContent = character.name
                gender.textContent = character.gender
                height.textContent = character.height

                img.classList.remove('hide')

                
            }
       

       getCharacters()
}

main()

// module.exports = { main }



  











