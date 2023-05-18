import "../css/App.css";
import  { useContext } from "react";
import { Context } from "..";

const NotFoundForm = () => {
    const {store} = useContext(Context);
    return (
      <div >
        <h1>Активируйте аккаунт через почту {store.user.email} {store.isActivated}</h1>
         <h1>После активации перезайдите</h1>
         <button className="login-button base-button" onClick={()=>store.logout()}>Выйти</button>
      </div>
    );
}

export default NotFoundForm;