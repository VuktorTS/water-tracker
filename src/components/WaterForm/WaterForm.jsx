import sprite from '../../img/icons.svg'
import { BtnSection, Icon, Mlspan, RoundBtn } from './WaterForm.styled';

const WaterForm = ({decreaseMl, addMl, waterVolume}) => {
        return (
                <BtnSection>
                        <RoundBtn type="button" onClick={decreaseMl}>
                                <Icon>
                                        <use href={`${sprite}#icon-decrement-outline`}></use>
                                </Icon>
                        </RoundBtn>
                        <Mlspan>{waterVolume}ml</Mlspan>
                        <RoundBtn type="button" onClick={addMl}>
                                <Icon>
                                        <use href={`${sprite}#icon-add`}></use>
                                </Icon>
                        </RoundBtn>
                </BtnSection>)
}
export default WaterForm;