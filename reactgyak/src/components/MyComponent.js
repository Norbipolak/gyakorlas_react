// function MyComponent(props) {
//     return(
//         <div>
//             <h1>This is my component!</h1>
//         </div>
//     );
// }

function MyComponent({color, text}) {
    return(
        <div>
            <h1 style={{color:color}}>{text}</h1>
        </div>
    );
}

export default MyComponent;

/*
function MyComponent() {
    return(
        <div>
            <h1>This is my component!</h1>
        </div>
    );
}

export default MyComponent;

így néz ki alapból a felépítése, ilyenkor kiírja a képernyőre, hogy This is my component!
fontos, hogy be legyen írva az export default és a function neve és, hogy az App.js-ben pedig 
import MyComponent from './components/MyComponent'; és hogy az App.js-ben is export default App legyen 

Props-ok!!!!!!!!
A kezdeti beállításai a komponenseknek és ettől lesznek a komponenesek újrafelhasználhatóak, hiszen itt a props-ban meg tudnánk
mondani, hogy milyen színű legyen a betűnek a színe ebben a h1-es tag-ben azzal, hogy a color a props.color -> style={{color:props.color}}
és azt is meg tudjuk adni, hogy mi legyen a szöveg a h1-ben, ez lesz a props.text -> <h1 style={{color:props.color}}>{props.text}</h1>

function MyComponent(props) {
    return(
        <div>
            <h1 style={{color:props.color}}>{props.text}</h1>
        </div>
    );
}

Viszont, hogyan tudjuk átadni ezeket a props-okat, úgyhogy itt azt mondtuk, hogy van egy color és egy text akkor a App.js-ben a MyComponent-nek 
létre kell hozni ilyen attributumokat, hogy color és text -> 
function App() {
  return (
    <MyComponent color="purple" text="Purple Rain"/>
  );
}

és akkor így a böngészőben meg fog jelleni az a text amit beirtunk, tehát Purple Rain, purple(lila) színben
viszont ezt meg lehet így is csinálni, hogy létrehozunk egy tag-et és abba beleteszünk két MyComponent-et
-> 
function App() {
  return (
    <>
    <MyComponent color="purple" text="Purple Rain"/>
    <MyComponent color="green" text="Deep Purple"/>
    </>
  );
}

és akkor így megjelenik a két szövegünk az Purple Rain lilán és alatta a Deep Purple zölden 

A props-oknak van még egy fajta szintaktíkája, hogy nem props.color meg props.text lesz, hanem egy objektumban felsoroljuk, hogy 
van egy color-unk és egy text-ünk és utána ezekre ugy tudunk, hivatkozni, hogy simán color és text
ami itt -> <h1 style={{color:color}}>{text}</h1> kényelmesebb, mert nem kell kiírnunk, hogy props.valami de viszont itt ->
function MyComponent({color, text}) ha nem kettő, hanem 25 alapbeállítás található, akkor meg kevésbé kényelmes 
de egyébként ugyanazt fogja végrehajtani, csinálni
-> 
function MyComponent({color, text}) {
    return(
        <div>
            <h1 style={{color:color}}>{text}</h1>
        </div>
    );
}

Ezek a komponensek, és ezekkel a beállításokkal lesznek újrafelhasználhatóak ezek a komponensek, valamikor egyébként nem is kell beállítás, hogy 
újrafelhasználhatő legyen, mert mindegyik ugyanugy néz ki és mindegyiknek ugyanaz a tartalma, de általában véve ezek azok a props-ok, amik 
lehetővé teszik, hogy máképpen nézzen ki egy kicsit a komponens, más kontextusban meg eltérő legyen a tartalma de alapvetően ugyanazt a kódot 
használjuk 

A következő az a ClickCounter.js lesz 
*/ 