myFunction= () =>{


    fetch("https://aeh961.github.io/Degrees/schools.json")

    .then(function(response){
    
        return response.json();
    })
    .then(function(schools){
        let placeholder = document.querySelector("#data-output");
        let datahead= document.querySelector("#datahead") 
        let headout = `
         <tr>
            <th>Image</th>
            <th>School Name</th>
            <th>Major</th>
            <th>Degree</th>
            <th>year</th>
        </tr>`

        let out ="";
        for(let school of schools){
            out += `
            <tr>
                <td><img src='${school.image}'</td>
                <td>${school.name}</td>
                <td>${school.major}</td>
                <td>${school.degree}</td>
                <td>${school.year}</td>
            </tr>
            `;
        }
        datahead.innerHTML = headout;
        placeholder.innerHTML= out;
    })
    
    

}

