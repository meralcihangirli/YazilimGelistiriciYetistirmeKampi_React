import React from "react";
import UserList from "../pages/UserList";
import { Grid } from "semantic-ui-react";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
    
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <UserList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
