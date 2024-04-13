import WaterConsumptionTracker from '../components/WaterConsumptionTracker/WaterConsumptionTracker';
import WhyDrinkWater from '../components/WhyDrinkWater/WhyDrinkWater';
import { BackgroundContainer, StyledContainer } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <BackgroundContainer>
      <StyledContainer>
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      </StyledContainer>
    </BackgroundContainer>
  );
};
export default WelcomePage;
