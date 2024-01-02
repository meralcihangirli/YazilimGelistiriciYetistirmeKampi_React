import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import UserService from "../services/userService";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService
      .getUsers()
      .then((result) => setUsers(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
         <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Adı</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            users.map(user=>(
              <Table.Row key={user.id}> 
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
           
          </Table.Row>
            ))
          }
          
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
