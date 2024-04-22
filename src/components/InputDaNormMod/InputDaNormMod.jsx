import {
  Label,
  TitleP,
  DivInp,
  Input,
  PInput,
} from "./InputDaNormMod.styled";

const InputDaNormMod = ({ title = '', type, name, value, onChange, textInp, checked = false, height = '44px', width = '100%', gap = '0' }) => {
  return (
    <Label>
    <TitleP>{title}</TitleP>
      <DivInp style={{gap: gap}}>
        <Input
          style={{
            height: height,
            width: width,
          }}
      type={type}
      name={name}
      placeholder="0"
        value={value}
        defaultChecked={checked}
          onChange={onChange}
      />
      <PInput>{textInp}</PInput>
    </DivInp>
  </Label>
  )
};

export default InputDaNormMod;