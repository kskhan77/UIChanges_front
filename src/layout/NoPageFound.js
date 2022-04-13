import React, { useEffect, useContext } from "react";
import image from "../../images/404.png";
import AuthContext from "../../context/auth/authContext";

const NoPageFound = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <div class="container">
        <div class="row" style={{ paddingTop: "8rem" }}>
          <div class="col">
            <div class="text-center">
              <img src={image} alt="404" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoPageFound;
