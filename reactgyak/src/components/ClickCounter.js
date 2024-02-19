import { useState } from "react";

function ClickCounter() {
//let counter = 0;
let [counter, setCounter] = useState(0);

const increment = ()=> {
    // counter++;
    // console.log(counter);
    // counter++;

    // setCounter(counter);
    setCounter(c=>c+1);
};

    return(
        <div className="container center-text">
            <h3 style={{color:"green"}}>
                {counter}
            </h3>
            <button onClick={increment}>Számolás!</button>
        </div>
    );
}

export default ClickCounter;

/*
Szeretnénk egy kattintásszámlálót leprogramozni, reactben rendelkezik speciális feltételekkel, hogy müködjön
Kell valami, amiben kiírjuk magát a változót, amivel a kattintásokat számoljuk 
Ehhez szükségünk van egy h3-as tag-re és egy button-ra -> 
    return(
        <div>
            <h3 style={{color:"green"}}></h3>
            <button>Számolás!</button>
        </div>
    );

és ha azt mondjuk, hogy let counter = 0; akkor meg tudjuk jeleníteni a h3-as tag-ben(címsorban) a counter-t így ahogy van 
let counter = 0;

    return(
        <div>
            <h3 style={{color:"green"}}>
                {counter}
            </h3>
            <button>Számolás!</button>
        </div>
    );

a {counter} az a változóbehelyesítés !!!!!!!!!!! az App.js-ben kitöröljük a MyComponent-eket és beírjuk a ClickCounter-t
function App() {
  return (
    <>
    <ClickCounter/>
    </>
  );
}

Mit kellenne tenni annak érdekében, hogyha rákattintunk a gombra, akkor a counter-nek az értéke növekedjen -> 
csinálunk gy increment nevű függvényt és abban counter++ -> 
const increment = ()=> {
    counter++;
};
Ilyenkor, mivel a counter-nek be van helyetesítve az értéke itt, bele van gyakorlatilag ágyazva a változó értéke aJSX kódba -> 
    <h3 style={{color:"green"}}>
        {counter}
    </h3>
ezért azt váránk, hogyha a button-unkra csinálunk egy onClick-es eseménykezelőt és megadjuk neki az increment függvényt 
(mit csinál az onClickes eseménykezelő -> ha rákkatintunk akkor le fog futni valami, tökmindegy, hogy mit adunk meg neki)
<button onClick={increment}>Számolás!</button>

Ha rányomunk a gombra, akkor semmi nem történik, mert valamiért nem hívodik meg és nem változik meg a counter-nek az értéke
kiírjuk a counter-t a konzolra -> 
const increment = ()=> {
    counter++;
    console.log(counter);
}; 
A counter-nek módosul az értéke a konzolon, ennek ellenére a böngészőben nullán marad 
ez itt nem fog változni -> 
    <h3 style={{color:"green"}}>
        {counter}
    </h3>

!!!!!!!!!!! A sima változóknak az értékmódosulására nem reagálnak a komponensek (szóval erre nem -> let counter = 0;)
csakis a useState-s változókra!!!!!! -> let [counter, setCounter] = useState(0);

Két dolgot kell megfigyelni 
1. ez visszad egy tuple-t [counter, setCounter], aminek az a lényege, hogy ez egy tömb, ami meghatározott mennyiségű és típusú 
változokkal rendelkezik meg meghatározott sorrendben, ez a counter az most jelenleg nekünk egy number useState(0);
!!!! a setCounter pedig egy function, amivel képesek vagyunk beállítani a counter-ünk értékét 

A 2. pedig, hogy a useState-t nekünk importálni kell a react alapkönyvtárból -> import { useState } from "react";
mert, ha nem importáljuk, akkor azt figja nekünk mondani, hogy useState is not defined

Még mindig nem müködik, azért mert ezeket a useState-s komponensváltozóknak, csak ugy tudjuk megváltoztatni az értéküket, hogy 
hogy a saját setterüket alkalmazzuk!!!!!!!!!! 

const increment = ()=> {
    // counter++;
    // console.log(counter);

    setCounter(5);
};
és ilyenkor beállítja(megváltozik az értéke) 5-re, ha megnyomjuk a gombot és utána, ha tovább nyomjuk, akkor is 5 marad 
hogyan tudjuk ezt folyamatosan váltani ->
const increment = ()=> {
    counter++;

    setCounter(counter);
};
Ez az egyik megoldás, hogy a counter változót nüveljük eggyel és a setCounter(setterrel) pedig beállítjuk önmagára  

A másik megoldás ugyanerre ->
const increment = ()=> {
    setCounter(c=>c+1);
};
A c az a counter jelenlegi értékét reprezentálja a c+1, pedig a jővőbeli értékét
!!! az viszont nem müködik, hogy setCounter(c=>c++); de ez viszont megint müködik setCounter(c=>++c);
Ennek az az oka, hogy más a müveleti sorrend, minthogy a ++ a c után lenne, mert hogyha a c előtt van, akkor megnőveli a c értékét és
utána történik az értékátadás önmagának 

c++, igy viszont, az történik, hogy elöször átadja az értéket, ami ugyanaz volt mint korábban és aztán a c-nek megnöveli az értékét, ami jelen 
esetben egy paraméter(egy lokális változó) teháőt nem mindegy a sorrend

ez igy már müködik, most csinálunk egy todolist-et -> TodoList.js
*/