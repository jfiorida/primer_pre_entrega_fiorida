import CasrtWidget from "./CartWidget"

const NavBar =() =>{

    return(
  
      <nav>
        <h3>CristalisArte</h3> 
            <div>
               
                <button>Home</button>
                <button>Productos</button>
                <button>contacto</button>  
               
            </div>
            <CasrtWidget/> 
      </nav>
      ) 
      
      
  }
export default NavBar
