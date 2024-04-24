import { format, parse } from 'date-fns';
import sprite from '../../img/icons.svg'
import { DataBox, EditMlSpan, GlassIcon, TimeSpan } from './EditData.styled';

const EditData = ({ waterVolume, time }) => {
        const parsedTime = parse(time, 'HH:mm', new Date());

        const formattedTime = format(parsedTime, 'hh:mm a');
        
        return (
                <DataBox>
                        <GlassIcon>
                                <use href={`${sprite}#icon-glass`}></use>
                        </GlassIcon>
                        <EditMlSpan>{waterVolume} ml</EditMlSpan>
                        <TimeSpan>{formattedTime}</TimeSpan>
                </DataBox>)
}

export default EditData;