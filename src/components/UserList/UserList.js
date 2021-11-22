import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";

import User from "./../UserProfile/User";
import UserDescription from "./../UserProfile/UserDescription";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchUserData = async () => {
        await fetch("https://randomuser.me/api/?results=10")
          .then((response) => response.json())
          .then((data) => {
            const newUsers = [];
            Object.entries(data.results).forEach(([key, values]) => {
              const newUser = {
                user_id: key,
                ...values
              };
              newUsers.push(newUser);
            });

            setUsers(newUsers);
            setLoading(false);
            setError(false);
          })
          .catch((error) => {
            console.log(error);
            setError(true);
            setLoading(false);
          });
      };
      fetchUserData();
    }, 2000);
  }, []);

  const Placeholder = <div className="users--dot__flashing"></div>;

  return (
    <Router>
      <Switch>
        <Route path="/week7/:userId" exact>
          <UserDescription users={users} />
        </Route>
        <Route path="/week7" exact>
          <div className="users">
            <h3 className="users--h3">Users profiles</h3>
            {hasError && <p className="users--p__loading">An error occured</p>}

            {isLoading && (
              <ReactPlaceholder
                ready={!isLoading}
                customPlaceholder={Placeholder}
              />
            )}

            <div className="users__list">
              <ul className="users--ul">
                {users.map((user) => (
                  <li key={user.user_id} className="users--li">
                    <Link to={`/week7/${user.user_id}`} className="users--link">
                      <User
                        img={user.picture.thumbnail}
                        fullName={`${user.name.title}. ${user.name.first} ${user.name.last}`}
                        address={`${user.location.city}, ${user.location.country}`}
                        email={user.email}
                        date={user.registered.date}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default UserList;
