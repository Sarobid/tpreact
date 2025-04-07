function Menu() {
    function handleClickMenu(menu){
        alert(menu)
    }
    return (
        <nav class="nav flex-column" style={{width:'200px', position:'fixed', top:0, left:0, height:'100%', backgroundColor:'#f8f9fa', padding:'10px'}}>
            <a class="nav-link" href="#" onClick={()=>{handleClickMenu("Notes")}} >Notes</a>
            <a class="nav-link" href="#" onClick={()=>{handleClickMenu("Etudiants")}}>Etudiants</a>
            <a class="nav-link" href="#" onClick={()=>{handleClickMenu("Matières")}}>Matières</a>
            <a class="nav-link" href="#" onClick={()=>{handleClickMenu("A propos")}}>A propos</a>
        </nav>
    );
}
export default Menu;