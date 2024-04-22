import sprite from '../../img/icons.svg'
import { DataBox, EditMlSpan, GlassIcon, TimeSpan } from './EditData.styled';

const EditData = ({waterVolume, time}) => {
        return (
                <DataBox>
                        <GlassIcon>
                                <use href={`${sprite}#icon-glass`}></use>
                        </GlassIcon>
                        <EditMlSpan>{waterVolume} ml</EditMlSpan>
                        <TimeSpan>{time}</TimeSpan>
                </DataBox>)
}

export default EditData;