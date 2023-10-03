import { BtnContainerStyle, ContainerStyle, QntContainerStyle } from "./styles";

function VerticalQuantityBtn({ itemIncrement, itemDecrement, quantity }: any) {
  return (
    <ContainerStyle>
      <BtnContainerStyle variant="button" onClick={itemIncrement}>
        +
      </BtnContainerStyle>
      <QntContainerStyle variant="button">{quantity}</QntContainerStyle>
      <BtnContainerStyle variant="button" onClick={itemDecrement}>
        -
      </BtnContainerStyle>
    </ContainerStyle>
  );
}

export default VerticalQuantityBtn;
