import { getTimeOptions } from "../../helpers/formatDate";
import { parse, format } from 'date-fns';
import { TimeInput, TimeSelect } from "./TimeForm.styled";

const TimeForm = ({ time, handleTimeChange }) => {
        const parsedTime = parse(time, 'HH:mm', new Date());

        const formattedTime = format(parsedTime, 'hh:mm a');
        
        const customContentRenderer = () => (
                <TimeInput>{formattedTime}</TimeInput>
        )
        return (
                <TimeSelect
                        id="time"
                        options={getTimeOptions()}
                        labelField="time"
                        valueField="id"
                        onChange={(values) => handleTimeChange(values)}
                        closeOnSelect="true"
                        dropdownHandle='false'
                        searchable='false'
                        contentRenderer={customContentRenderer}
                        dropdownHandleRenderer={() => (<span></span>)}        
                        required
                ></TimeSelect>)
}

export default TimeForm;