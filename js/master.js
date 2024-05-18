let cIndex = 0;
let content = document.querySelector(".content");
let next = document.querySelector(".next");
let share = document.querySelector(".btn-2")



function getAyat(){
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function (){
        if (this.readyState === 4 && this.status === 200) {

            let ayatOp = JSON.parse(this.responseText)
            console.log(this.responseText);
            let ayatCount = ayatOp.length;
            
            function load() {
                ayatOp[Math.trunc(Math.random() * ayatCount)]
            }
            window.onload = load();

            addAyat(ayatOp[cIndex], ayatCount);
            next.addEventListener("click", () =>{
                cIndex ++;
                content.innerHTML = '';
                addAyat(ayatOp[cIndex], ayatCount);
                if (cIndex === 19) {
                    cIndex = 0;
                }
            })
            
        }
        
    }

    
    myRequest.open("get", "ayat.json", true);
    myRequest.send();
    
    
    
}
getAyat();

function addAyat(opj, count){
    let ayatContent = document.createElement("p");
    let ayatText = document.createTextNode(opj['Aya']);
    ayatContent.appendChild(ayatText);
    content.appendChild(ayatContent);
    let text = opj['Aya'];
    share.addEventListener("click", () =>{
        window.open("https://twitter.com/intent/tweet?text=" + text);
    })
}

