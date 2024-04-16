import sprite from '../../img/icons.svg';
import {
  Container,
  Icon,
  Item,
  List,
  ListContainer,
  ListTitle,
  MainTitle,
  StyledNavLink,
  TextItem,
  Title,
  TitleContainer,
} from './WaterСonsumptionTracker.styled';

const WaterConsumptionTracker = () => {
  return (
    <Container>
      <TitleContainer>
        <MainTitle>Water Consumption Tracker</MainTitle>
        <Title>Record daily water intake and track</Title>
      </TitleContainer>
      <ListContainer>
        <ListTitle>Tracker Benefits:</ListTitle>
        <List>
          <Item>
            <Icon>
              <use href={`${sprite}#icon-calendar-days`}></use>
            </Icon>
            <TextItem>Habit drive</TextItem>
          </Item>
          <Item>
            <Icon>
              <use href={`${sprite}#icon-chart-bar`}></use>
            </Icon>
            <TextItem>View statistics</TextItem>
          </Item>
          <Item>
            <Icon>
              <use href={`${sprite}#icon-wrench-screwdriver`}></use>
            </Icon>
            <TextItem>Personal rate setting</TextItem>
          </Item>
        </List>
      </ListContainer>

      <StyledNavLink to="/signup">Try tracker</StyledNavLink>
    </Container>
  );
};

export default WaterConsumptionTracker;
