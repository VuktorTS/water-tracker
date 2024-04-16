import WaterConsumptionTracker from '../components/WaterConsumptionTracker/WaterConsumptionTracker';
import WhyDrinkWater from '../components/WhyDrinkWater/WhyDrinkWater';
import {
  BackgroundContainer,
  Container,
  MainContainer,
} from './WellcomePage.styled';

const WelcomePage = () => {
  return (
    <BackgroundContainer>
      <MainContainer>
        <Container>
          <WaterConsumptionTracker />
          <WhyDrinkWater />
        </Container>
      </MainContainer>
    </BackgroundContainer>
  );
};
export default WelcomePage;
