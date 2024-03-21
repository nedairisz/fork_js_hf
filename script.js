$("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles1();
    esemenykezeles2();
   
    esemenykezeles4()
});

function elemekElerese1() {
    const ELEM = $("section h2");
    console.log(ELEM.html());
}

function elemekElerese2() {
    /* const ELEM = document.querySelector("#ide");
    const newPTag = document.createElement("p");
    newPTag.textContent = "Jó reggelt!";
    ELEM.appendChild(newPTag); */

    const ELEM = $("#ide");
    ELEM.html("<p>Jó reggelt!</p>")
}

function elemekElerese3() {
    /* const ELEM = document.querySelector(".ide");
    const newPTag = document.createElement("p");
    newPTag.textContent = "Jó reggelt!";
    ELEM.appendChild(newPTag); */

    const ELEM = $(".ide");
    ELEM.eq(0).html("<p>Jó reggelt!</p>")
}

function elemekElerese4() {
    const listaELEM = $(".lista");
    let szamLista = "<ul>";
    for (let i = 0; i < 5; i++) {
        let veletlenSzam = Math.floor(Math.random() * 21) + 10;
        szamLista += `<li>${veletlenSzam}</li>`;
    }
    szamLista += "</ul>";
    listaELEM.innerHTML = szamLista;

    //return ELEM.eq(0).html(txt)
}

function elemekFormazasa1(){
    const listaELEM = document.querySelector(".lista");
    listaELEM.classList.add("formazott");
}

function esemenykezeles1() {
    const listaELEM = document.querySelector(".lista");
    const kattintasutanELEM = document.querySelector(".kattintasutan");

    listaELEM.addEventListener("click", function() {kattintasutanELEM.innerHTML = listaELEM.innerHTML;});
}

function esemenykezeles2(){
    const feladatELEM = document.querySelector(".feladat"); 
    const GOMB = document.createElement("button");  // 1. Gomb létrehozása
    GOMB.textContent = "Gomb"; 
    feladatELEM.appendChild(GOMB);   // 2. Gomb hozzáadása a feladatElemhez

    // 3. Eseménykezelő hozzáadása a gombhoz
    GOMB.addEventListener("click", function() {
        // 4. Új div létrehozása
        const ujDiv = document.createElement("div");  
        // 5. Kép hozzáadása az új divhez
        ujDiv.innerHTML = '<img src="kep/ez.png" alt="a kép">'; 
        // 6. Új div hozzáadása a feladatElemhez
        feladatELEM.appendChild(ujDiv);
        esemenykezeles3()
    });

    /* const feladatELEM = document.querySelector(".feladat");
    feladatELEM.innerHTML = "<button>OK</button>";

    const gombELEM = document.querySelector(".feladat button");
    gombELEM.addEventListener("click", function () {
        feladatELEM.innerHTML = `<img src="kep/ez.png" alt="a kép">`;
        esemenykezeles3()
    }); */
}

function esemenykezeles3(){
    const kepELEM = document.querySelector(".feladat img");
    console.log(kepELEM)
    kepELEM.addEventListener("mouseenter", function() {kepELEM.style.width = "120%"; });
    
    kepELEM.addEventListener("mouseleave", function() {
        kepELEM.style.width = "100%"; 
    });
}

function esemenykezeles4(){

    const taroloElemek = document.querySelectorAll(".elem");
    const EREDMENY = document.querySelector(".megjelenito");

    for (let i = 0; i < taroloElemek.length; i++) {
        taroloElemek[i].addEventListener("click", function(event) {
            const tartalom = event.target.textContent;
            EREDMENY.textContent = tartalom;
            // eredmenyELEM.innerHTML += event.target.innerHTML;  //így nem cserélődik, hanem hozzáadódik folyton
        });
    }
}
