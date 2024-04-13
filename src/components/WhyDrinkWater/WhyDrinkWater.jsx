import sprite from '../../img/icons.svg';
import {
  Container,
  Icon,
  Item,
  List,
  TextItem,
  Title,
} from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  return (
    <Container>
      <Title>Why Drink Water?</Title>
      <List>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>Supply of nutrients to all organs</TextItem>
        </Item>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>Providing oxygen to the lungs</TextItem>
        </Item>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>Maintaining the work of the heart</TextItem>
        </Item>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>Release of processed substances</TextItem>
        </Item>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>
            Ensuring the stability of the internal environment
          </TextItem>
        </Item>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>Maintaining within the normal temperature</TextItem>
        </Item>
        <Item>
          <Icon>
            <use href={`${sprite}#icon-ellipse`}></use>
          </Icon>
          <TextItem>
            Maintaining an immune system capable of resisting disease
          </TextItem>
        </Item>
      </List>
    </Container>
  );
};

export default WhyDrinkWater;
