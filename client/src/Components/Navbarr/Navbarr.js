import React, { useState, useEffect } from "react";
import '../Navbarr/Navbarr.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import images from '../../Components/Logo/mano.jpg';
import { toast } from "react-toastify";
import {  logout  } from '../../services/authService'
import {REACT_APP_BACKEND_SERVER_URL} from '../../config/index'

const Navbarr = () => {
  const [loading,setLoading]= useState(false)
  const [users,setUsers] = useState("")
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const username = localStorage.getItem("username") || "{}"
  const access = user?.access || {};
  const token = localStorage.getItem("token");

  const canCreateUsers = access.userCreateAccess;
  const canAccessGoldSmith = access.goldSmithAccess;
  const canAccessItems = access.itemAccess;
  const canAccessProduct = access.productAccess;
  const canAccessRestore = access.restoreAccess;
  const canAccessBilling = access.billingAccess;

  const isMasterActive = [
    "/admin",
    "/additem",
    "/addgoldsmith"
  ].includes(location.pathname);

  const handlelogout =()=>{
    // const log = window.confirm("are you sure to logout?")
    // if(log){
      // logout
    // }
  }

  return (
    <div className="nav-bar">
      {/* Logo */}
      <img src={images} alt="Logo" className="imge" />

      <div className="positionn">

        {/* Products 
        {canAccessProduct && (
        <NavLink to="/home">Products</NavLink>
         )} */}

        {/* Billing */}
        {canAccessBilling && (
        <NavLink to="/billing">Billing</NavLink>
        )}

        {/* Restore */}
        {canAccessRestore && (
        <NavLink to="/restore">Restore</NavLink>
        )}
        {/* Master dropdown (show only if user has ANY master permissions) */}
        {(canCreateUsers || canAccessItems || canAccessGoldSmith) && (
          <div className="master-link">
            <NavLink to="#" className={isMasterActive ? "active" : ""}>
              Master
            </NavLink>

            <div className="master-dropdown">

              {canCreateUsers && (
                <NavLink to="/admin">Admin</NavLink>
              )}

              {canAccessItems && (
                <NavLink to="/additem">Add Item</NavLink>
              )}

              {canAccessGoldSmith && (
                <NavLink to="/addgoldsmith">Add Gold Smith</NavLink>
              )}

            </div>
          </div>
        )}

        <NavLink to="/home" className="hom">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
      </div>
      <NavLink to="/" onClick={handlelogout}>
          <div className="userinfo">
            <span className="userAvatar">{username?.charAt(0).toUpperCase()}</span>
          </div>
        </NavLink>
    </div>
  );
};


export default Navbarr;
