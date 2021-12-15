import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actionData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

const styles = {
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5%",
  },
  listItem: {
    border: "1px solid grey",
  },
};
const ListSomething = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { data } = useSelector((state) => state.dataReducer);
  return (
    <Box style={styles.list}>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} style={styles.listItem}>
            {item.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default ListSomething;
