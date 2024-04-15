import WaterConsumptionTracker from '../components/WaterConsumptionTracker/WaterConsumptionTracker';
import WhyDrinkWater from '../components/WhyDrinkWater/WhyDrinkWater';
import { Container } from './WellcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </Container>
  );
};
export default WelcomePage;
