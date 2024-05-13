import css from './SideBar.module.css'
function SideBar(){
    return(
        <div className={css.total}>
            <div>
                <img src={'fotoperfil.png'} className={css.perfil}/>
            </div>
            <div className={css.iconGroup}>
                <i className={"fa-solid fa-book fa-xl " + css.icon}></i>
                <i className={"fa-regular fa-calendar fa-xl " + css.icon}></i>
                <i className={"fa-regular fa-user fa-xl " + css.icon}></i>
            </div>
            <div>
                <i className={"fa-solid fa-arrow-right-from-bracket "+ css.icon}></i>
            </div>
        </div>
    )
}

export default SideBar