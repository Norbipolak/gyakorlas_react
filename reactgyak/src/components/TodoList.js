function TodoList() {
const [todos, setTodos] = useState([]);
const [currentTask, setCurrentTask] = useState("");
const [errors, setErrors] = useState([]); 
const [importance, setImportance] = useState("");

const addToList = ()=> {
    if(currentTask === 0) {
        setErrors([...errors, "Az input mező üresen maradt!"]);
        return;
    }

    const taskObj = {
        color:importance,
        task:currentTask
    }

    //setTodos([...todos], currentTask);
    setTodos([...todos], taskObj);
    /*
    [...todos] -> ide kibontjuk az összes értékét a todos-nak és még hozzáadjuk a currentTask-et
    */
    setCurrentTask("");
    setErrors([]);
};

    return(
        <div className="container center-text">
            {
                errors.map((e, i)=>
                <h4 key={i} style={{color:"red"}}>{e}</h4>)
            }
            <h3>Teendők leírása</h3>
            <input onChange={e=>setCurrentTask(e.target.value)}
            value={currentTask} type="text" className="center-input"/>

            <h3>Fontosság</h3>
            <select onChange={e=>setImportance(e.target.value)}
            value={importance} className="center-input">
                <option value="">Válassz fontosságot!</option>
                <option value="#7e7e7e">kevésbé fontos</option>
                <option value="#ff6619">közepesen fontos</option>
                <option value="#e62600">nagyon fontos</option>
            </select>

            <button className="center-input"
            onClick={addToList}>Felvitel</button>

            <ul className="todo-list">
                {
                    todos.map((t,i)=>
                    <li style={{backgroundColor:t.color}} key={i}>{t.task}</li>)
                }
            </ul>
        </div>
    );
}

export default TodoList;

/*
Mire van szükségünk a TodoList-nél ->
Szükségünk van arra, egy h3-as tag-re, egy beviteli mezőre(input), egy button-ra, hogy felvigyük a dolgokat és egy listára, ahol 
megjelenítjük a teendőinket (ul-li)
    return(
        <div className="container center-text">
            <h3>Teendők leírása</h3>
            <input type="text"/>

            <button>Felvitel</button>

            <ul>
                
            </ul>
        </div>
    );
Változók tekintetében mindig azt kell megnézni, hogy mit akarunk, hogy mit akarunk tárolni és mennyi ideig 
Azt, hogy mit akarunk tárolni az azért fontos, mert a változik, akkor olyan típusú változót hozunk létre, hogyha több adatot 
szeretnénk eltárolni, akkor megtehetnénk azt is, hogy stringként összefüzzük az adatokat és utána majd spliteljük, csak ez hülyeség, mert ott 
van a tömb!!!! hogyha számot akarunk tárolni, akkor egy number változót hozunk létre és hogy mennyi ideig van rá szükség az általában véve, 
meg hogy milyen scope-ban van ré szükség az általában véve attól függ, hogy milyen szinteken akarjuk használni, pl. itt a TodoList-ben 
érdemes lokális változókat létrehozni, mert ezt másik komponensben nem szeretnénk használni ezeket a változókat tehát itt a (function)
TodoList-ben készítjük el ezeket a változókat 

Elsőként kellene nekünk egy todos(lista) useState-s változó -> const [todos, setTodos] = useState([]);
Másodikként csinálunk egy currentTask-et -> const [currentTask, setCurrentTask] = useState("");

és ha rákattintunk a felvitel gombra, akkor a currrentTask-et bele kell raknunk a todos-ba!!!!!!!!!!!!!!!
de mi szükséges, ahhoz, hogy ezt a currentTask-et az éppen aktuális feladattal feltöltsük (<input type="text"/>)
-> 
!!!!!!!!!az szükséges hozzá, hogy ehhez az input mezőre csinálunk egy eseménykezelőt (onChange) -> 
    <input onChange={e=>setCurrentTask(e.target.value)}
        type="text"/>
Tehát, amikor megváltozik az értéke, ennek a bizonyos input mezőnek, akkor beállítjuk az input mező az értékére a 
currentTask-et, ami még fontos, hogy az input-nak be tudjuk állítani az értékét, arra, hogy currentTask (value={currentTask})
-> 
    <input onChange={e=>setCurrentTask(e.target.value)}
    value={currentTask} type="text"/>
és ennek majd lesznek előnyei, általában véve, hogyha egy input-hoz kötünk egy változót, akkor nem csak ez az onChange
hanem ez a value is!!!!!!!!!!!!!!!!!!!!!

most jön az a függvény ami felviszi a task-okat -> 
const addToList = ()=> {
    setTodos([...todos], currentTask);
    
    [...todos] -> ide kibontjuk az összes értékét a todos-nak és még hozzáadjuk a currentTask-et
};
ha ez megvan akkor csinálunk egy onClick-et a button-unknak ->
<button onClick={addToList}>Felvitel</button>

de kérdés, hogy fog az ul-ben megjelenni ez a dolog(tehát a todos, amibe belepakoljuk a task-okat)
és erre a célra szoktuk alkalmazni a map-et -> 
    <ul>
        {
            todos.map((t,i)=><li key={i}>{t}</li>)
        }
    </ul>
és akkor egy li, az li-nek a belsejébe belerakjuk a t-t mint tido
itt a map-eknél szokta mondani, hogy should have a unique key property és akkor ott megadjuk a key propertynek az indexet key={i}
és akkor ez az alap toDoList már meg is van -> App.js-ben megadjuk a returnben ->
function App() {
  return (
    <div className='container'>
    <TodoList/>
    </div>
  );
}
itt be kell importálva lenni -> import TodoList from './components/TodoList';!!!!!!!!!!!!!!!!!!!

most ha beírunk valamit pl.hogy mosogatásó és rákattintunk a gombra, akkor megjelenik alatta egy listában (li)
de az a baj, hogy miután ez megtörtént az input mezőben bent marad, amit oda beirtunk és azt szeretnénk, hogy miután felvittük, akkor 
az ürüljön ki, ne látszodjon már 
viszont ez azért nem nagy probléma, mert a value-t beállítottuk a currentTask-ra
    <input onChange={e=>setCurrentTask(e.target.value)}
    value={currentTask} type="text"/>
és innentől kezdve, ha azt mondjuk az addToList függvényben, hogy setCurrentTask és egy üres string, akkor ha megnyomjuk a gombot, 
amihez ugye ez az addToList egy onChange-vel hozzá van kötve, akkor a currentTask-et egy üres string-vé változtatja és mivel a value 
hozzá van kötve value={currentTask} az input mezőhöz ezért annak a value-ja tehát az input mezőnek is egy üres string lesz 
const addToList = ()=> {
    setTodos([...todos], currentTask);
    setCurrentTask("");
};
és igy, ha beírunk valamit az input mezőnkbe és rákattintunk a gombra, akkor megjelenik alul a listában az input mező pedig kiürül és 
tudjuk beírni a következő teendőt, amit fel szeretnénk vinni és azok megjelennek egymás alatt egy lista formában
*****************************************************************************************
most az a probléma, hogy hozzá tudunk adni üres stringeket is, tehát, ha nincs beírva semmi az input mezőnkbe és rákattink a gombra, akkor 
ugyanigy felviszi a semmit, ahányszor rákattintunk a gombra, mintha beírtunk volna oda valamit 
mielőtt megjavítanánl ezt, azelőtt css-ben formáljuk az input, select és button mezőket 
csináltunk egy center-input mezőt, amit megkaptak az input és a button is(középre helyezi őket, display: block)
és az ul-nek is adunk egy osztályt className="todo-list" és az azon belüli li-ket formázzuk meg, hogyha felviszünk valamit, akkor 
legyen height-ja, line-height-ja, margin-ja, background-color-ja stb. ->
.todo-list li {
    list-style: none;
    background-color: #549831;
    margin: 10px auto;
    height: 50px; 
    line-height: 50px;
    max-width: 300px;
}
most jön az, hogyha véletlen üresen hagyon a todoList-et, tehát vétek egy hibát -> erre létrehozunk egy error useState-s változót
a hibáknak a kiírására -> const [errors, setErrors] = useState([]); 

!!!!!!!! ez ugy fog müködni, (addToList függvényben csináljuk) hogyha currentTask-nek a length-je az nulla, abban az esetben az errors-hoz
hozzáadjuk azt a hibaüzenetet a setErrors-val, hogy az input mező üresen maradt! és emellett azt modjuk, hogy return és ne tudjunk továbbmenni,
kilépünk a függvényből és ha így üresen maradt az input mező, akkor az errors-ból meg tudjuk kapni a megfelelő hibaüzenetet, másodszor is 
nem megyünk tovább az addToList-vel
-> 
const addToList = ()=> {
    if(currentTask === 0) {
        setErrors([...errors, "Az input mező üresen maradt!"]); az errors tömbbe belerakjuk a hibaüzenetünket
        return;
    }
    setTodos([...todos], currentTask);
    setCurrentTask("");
és akkor legfelülre kiíratjuk az error-jainkat
    {
        errors.map((e, i)=>
        <h4 key={i} style={{color:"red"}}>{e}</h4>)
    }
tehát ha az errors-ban van valami, akkor legenráljuk ezeket a piros színű h4-es tag-eket
most üresen hagytuk és jött felülre a hibaüzenet is, de az a gond, hogy utána beírunk valamit az input mezőnkbe, akkor még ott marad a hibaüzenet
Ennek az az oka, hogy ezt az error listát sohasem ürítjük ki 
Ezzel azt kell csinálni, hogyha be tudtuk az addToList függvénybe jutni, tehát nem volt hibánk, akkor az errors-t seteljük egy üres tömbre
-> 
const addToList = ()=> {
    if(currentTask === 0) {
        setErrors([...errors, "Az input mező üresen maradt!"]);
        return;
    }
    setTodos([...todos], currentTas
    setCurrentTask("");
    setErrors([]);!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
};
és akkor eltünik a hibaüzenet, ha utána beírtunk valamit és felvisszük 
***************************************************************************************************************************
Hogyan lehetne továbbfeljeszteni 
-> 
fontosságot tudunk beállítani az egyes feladatoknak (importance) és a különböző fontosságú feladatok, azok más-más háttérszínnel fognak 
megjelenni, a másik pedig, hogy le lehessen törölni feladatokat(hogy már megoldottuk őket)
Létrehozunk egy importance nevű useState-s változót, aminek a kezőértéke egy üres string lesz

!!!!!!!!!!!!!Létrehozunk jsx-elemként egy fontosság h3-as címsort és egy select mezőt, amiben option-ök lesznek különboző valuek-val, 
amihez hozzácsatolunk egy háttérszínt, tehát színek a value-k
    <h3>Fontosság</h3>
    <select className="center-input">
        <option value="">Válassz fontosságot!</option>
        <option value="#7e7e7e">kevésbé fontos</option>
        <option value="#ff6619">közepesen fontos</option>
        <option value="#e62600">nagyon fontos</option>
    </select>
és ehhez szeretnénk hozzákötni az importance useState-s változónkat, tehát a select mezőnknek adunk egy onChange-t!!!
ha már van egy onChange-ünk akkor value is be kell állítani hozzá!!!!!!!!!!!!!!!!!!
        <h3>Fontosság</h3>
        <select onChange={e=>setImportance(e.target.value)}
        value={importance} className="center-input">
            <option value="">Válassz fontosságot!</option>
            <option value="#7e7e7e">kevésbé fontos</option>
            <option value="#ff6619">közepesen fontos</option>
            <option value="#e62600">nagyon fontos</option>
        </select>
!!!!!!!!!!!!! Viszont, ilyenkor már nem stringeket fogunk tárolni a todos tömbünkben, hanem objektumokat,
hiszen itt összetett adatszerkezetre van szükség, mert itt kétféle tulajdonságunk van(hogy mi a feladat és a feladat fontossága)
erre készítünk egy taskObj-et az addToList-ben
A taskObj-nek lesz egy color-je, ami az importance és lesz neki egy task-je, ami a currentTask
-> 
    const taskObj = {
        color:importance,
        task:currentTask
    }
és mi ezt fogjuk belerakni a todos-ba, nem csak a currentTask-ot, ahogy eddig volt 
tehát most ehelyett -> setTodos([...todos], currentTask);
lesz ez -> setTodos([...todos], taskObj);
az egész függvény -> 
const addToList = ()=> {
    if(currentTask === 0) {
        setErrors([...errors, "Az input mező üresen maradt!"]);
        return;
    }

    const taskObj = {
        color:importance,
        task:currentTask
    }

    //setTodos([...todos], currentTask); ami volt 
    setTodos([...todos], taskObj); ami lett 

    setCurrentTask("");
    setErrors([]);
};
viszont, amikor ez van bent a todos-ban ez az objektum, akkor ez a kiírás már nem jó, mert most már a t.task.ot kell megadni 
és még meg kell adni background-color-t is hiszen importance szerint lesznek a színek 
tehát ehelyett ->
    <ul className="todo-list">
        {
            todos.map((t,i)=><li key={i}>{t}</li>)
        }
    </ul>
lesz ez ->
    <ul className="todo-list">
        {
            todos.map((t,i)=>
            <li style={{backgroundColor:t.color}} key={i}>{t.task}</li>)   {t.task} és style={{backgroundColor:t.color}}!!!!!!!!!!!!!!!!!!
        }
    </ul>
***********************************************************************************************************************************
még az a hiba nem választunk ki fontosságot tehát a választ fontoságot marad bent, aminek ugye value="" az értéke és ugy is 
felviszi a listában, nem látszik mert alapból fehér a színe, de viszont ha utána beirunk valamit akkor látszik, hogy ott van, mert a listában 
eggyel lejjebb rakja be 
ezt alapból nem kellenne engedni, szükség van arra, hogy leellenőrizzük azt, hogy kiválasztottuk a fontosságot, tehát a fontosság az nem 
egy üres string, ami ugye a Válassz fontosságot-nak az értéke, value-ja
*/
