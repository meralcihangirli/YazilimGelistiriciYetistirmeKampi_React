import React from "react";
import UserList from "../pages/UserList";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";
import { Routes, Route } from "react-router";
import UserDetail from "../pages/UserDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            
              <Routes>
                <Route exact path="/" element={<UserList/>} />
                <Route exact path="/users" element={<UserList/>} />
                <Route exact path="/users/:name" element={<UserDetail/>} />
                <Route exact path="/cart" element={<CartDetail/>} />
              </Routes>
         
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
