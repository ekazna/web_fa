import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function NavBar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h2>Шоколадница</h2>
      <div className="searchBar">
      <form >
      <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search"/>
    
    </form></div>
      
  </nav>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <br/>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <b><ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">МЕНЮ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">АДРЕСА</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">БОНУСЫ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ДОСТАВКА</a>
          </li>
      </ul></b>
    </div>
  </nav></>
  );
  }


  const menus = [{
    id: 0,
    name: 'Блинчики с красной икрой',
    imageId: './blin1.jpg',
    price:510, 
    desc:'Икра красная, масло сливочное, укроп, блинчики (яйцо, соль, мука, сахар, масло растительное)',
    avail:true
  }, 
  {
    id: 1,
    name: ' Эклер с паштетом из курицы',
    imageId: './ecler.jpg',
    price:479, 
    desc:'Куриный паштет, мандарины консервированные, масло сливочное, соус брусничный, рукола, эклер (Мука, яйцо, сливочное масло)',
    avail:true
  }, 
  {
    id: 2,
    name: 'Эклер с камчатским крабом',
    imageId: './ecler2.jpg',
    price:999, 
    desc:'Мясо камчатского краба, креветки жареные, соус шрирача, майонез, рукола, микрозелень, цедра лайма, эклер (Мука, яйцо, сливочное масло)',
    avail:true
  } 
  ]
const menus2 = [{
  id: 3,
  name: 'Брускетта с копченой уткой .',
  imageId: './brus.jpg',
  price:359, 
  desc:'Утиная грудка, мандарины консервированные, луковый джем, брусничный соус, сыр творожный, масло сливочное, лепестки миндаля, рукола, хлеб ремесленный',
  avail:true
}, 
{
  id: 4,
  name: 'Рыбный оливье с красной икрой ',
  imageId: './oliv.jpg',
  price:350, 
  desc:'Лосось слабосоленый, красная икра, картофель отварной, огурцы, морковь, яйцо отварное, горошек консервированный, майонез, укроп',
  avail:true
}, 
{
  id: 5,
  name: 'Холодец с говядиной и хреном',
  imageId: './holo.jpg',
  price:359, 
  desc:'Холодец с говядиной, огурцы маринованные, сливочный хрен, булочка бородинская, укроп',
  avail:true
}
];


function Menu1({ menu, size=150 }) {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };

  return (
    <div >
      <div>
        <img className="center"
        src={require(`${menu.imageId}`)}
        alt={menu.name}
        size = {50}
        />
      </div>
      <br/>
        <MenuDesk 
        name = {menu.name} 
        price={menu.price}
        avail ={menu.avail}/>

        <div>
        <button className="btn btn-warning btn-md" onClick={handleClick}>Подробнее</button>

        {/* 👇️ show component on click */}
        {isShown && <Box 
                    menu = {menu}/>}
    </div>
    </div>
  );
}



function MenuDesk({name, price, avail}){
  if (avail) {
      return <>
      <h3><b>{name}</b></h3>
            <h3>{price + " ₽"}</h3>
      </>;
  }
    return <>
    <h3><b>{name}</b></h3>
          <h3>{price + " ₽"}</h3>
    </>;
}


 
function getImageUrl(menu) {
    return ('./' +
      menu.imageId +
      '.jpg'
    );
  }



const listItems = menus.map(menu =>
    < Menu1
          menu = {menu} 
          size={100}/> 
  );

const listItems2 = menus2.map(menu =>
    < Menu1
          menu = {menu} 
          size={100}/> 
  );

function Top5(menu) {
  return (
    <div>
      <div className="flex-container">
   
        {listItems}

    </div>
      </div>
  );
}

function Top52(menu) {
  return (
    <div>
      <div className="flex-container">
   
        {listItems2}

    </div>
      </div>
  );
}



function Box({menu}) {
  return (
    <div className='openbox'>
      <br></br>
      <p >{menu.desc}</p>
    </div>
  );
}

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Top5/>
      <Top52/>      
    </div>

  );
}

export default App;
