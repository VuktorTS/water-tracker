import { getTimeOptions } from "../../services/timeOptions";
import { TimeInput, TimeSelect } from "./TimeForm.styled";

const TimeForm = ({ time, handleTimeChange }) => {
        const customContentRenderer = () => (
                <TimeInput>{time}</TimeInput>
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