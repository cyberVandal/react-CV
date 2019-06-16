import React from "react";
import { Container, Row, Col } from "reactstrap";

import classes from "./Main.module.css";

function Main() {
  return (
    <>
      <Container>
        <div className={classes.row}>
          <div className={classes.side} />
          <div className={classes.main} />
        </div>
      </Container>
    </>
  );
}

export default Main;
