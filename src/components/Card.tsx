import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import img from "../assets/images/where_to_click.png"

export default function MyCard() {
  const [check, setCheck] = useState(false)

  const handleClick = () => {
    setCheck((prevState) => !prevState)
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 4,
        border: `1px solid ${check ? "#65E9D9" : "#fff"}`,
        "&:hover": { border: "1px solid #65E9D9" },
        "& .MuiCardContent-root": {
          padding: "5px 10px"
        }
      }}
    >
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "#21B6A8"
                  }
                }}
              />
            }
            label="Label"
            onClick={handleClick}
          />
        </FormGroup>
      </CardContent>
    </Card>
  )
}
