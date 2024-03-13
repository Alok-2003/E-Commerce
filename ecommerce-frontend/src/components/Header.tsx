import { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaUser, FaSignOutAlt, FaSign } from "react-icons/fa";
import { Link } from "react-router-dom"

const user = { _id: "" }


const Header = () => {

  return (
    <nav className="header">
      <Link to={"/"}>
        HOME
      </Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {
        user?._id ? (
          <>
          </>
        ) : <Link to={"/login"}>
        <FaSign />
      </Link>
      }

    </nav>
  )
}

export default Header
