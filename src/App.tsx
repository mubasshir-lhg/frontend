import React from "react"
import "./App.css"
import MyCard from "./components/Card"
import styled from "@mui/styled-engine"

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "50px"
})

const App = () => {
  return (
    <Container>
      <MyCard />
    </Container>
  )
}

export default App
