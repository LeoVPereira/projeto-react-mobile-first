import { Button as ButtonNB } from "native-base"
import { Button as ButtonMaterial } from "@mui/material"

const Button = (props) => {
    return (
      props.material
        ? <ButtonMaterial {...props}>{props.text}</ButtonMaterial>
        : <ButtonNB {...props} colorScheme={props.color}>{props.text}</ButtonNB>
    )
  };

export default Button