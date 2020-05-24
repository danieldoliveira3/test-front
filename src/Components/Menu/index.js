import React from "react";
import Bag from "../../Pages/Bag";
import { useLocation } from "react-router-dom";
function Menu(props) {
  const Link = props.Link;
  const location = useLocation().pathname;
  return (
    <div id="menu">
      <ul className="menuList">
        <li>
          {location == "/bag" ? (
            <Link to="/bag" className="orange">
              SACOLA
            </Link>
          ) : (
            <Link to="/bag">SACOLA</Link>
          )}
        </li>
        <li>
          {location == "/payment" ? (
            <Link to="/payment" className="orange">
              PAGAMENTO
            </Link>
          ) : (
            <Link to="/payment">PAGAMENTO</Link>
          )}
        </li>
        <li>
          {location == "/confirmation" ? (
            <Link to="/confirmation" className="orange">
              CONFIRMAÇÃO
            </Link>
          ) : (
            <Link to="/confirmation">CONFIRMAÇÃO</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
