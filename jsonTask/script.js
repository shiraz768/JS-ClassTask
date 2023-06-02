function content() {
fetch("data.json")
    .then(x => x.json())
    .then(items => {
         let mobiles = document.getElementById("mobiles").value;
        let con = document.getElementById("con");
        let vivo = document.getElementById("vivo");
        let sam = document.getElementById("sam");
        let infi = document.getElementById("inf")

            for (let prop in items) {
               if(mobiles == "Infinix"){
               for(let key in items[prop].Infinix){
          infi.innerHTML += `<div class="card ml-5 m-3" style="width: 18rem;">
                <img src="${items[prop].Infinix[key].img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${items[prop].Infinix[key].name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
             
               }
            }if(mobiles == "Samsung"){
                for(let key1 in items[prop].Samsung){
                    sam.innerHTML += `<div class="card m-5" style="width: 18rem;">
                    <img src="${items[prop].Samsung[key1].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${items[prop].Samsung[key1].name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`
                
                }
             
            }
            if(mobiles == "Vivo"){
                for(let key2 in items[prop].Vivo){
                    vivo.innerHTML += `<div class="card m-5" style="width: 18rem;">
                    <img src="${items[prop].Vivo[key2].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${items[prop].Vivo[key2].name}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`
                
                }
               
            }
    
        }
        
    })
}
        // document.getElementById("drop").innerHTML = `<select name="" id="mobiles" onchange=${content()}>
        // <option value="${Samsung}">Samsung</option>
        //  <option value="${Infinix}"  >Infinix</option>
        //  <option value="${Vivo}"  >Vivo</option>
        //  </select>`;
        
    
