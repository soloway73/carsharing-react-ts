import { useState } from "react";
import DatePicker from "react-datepicker";

export function DateInput() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => (date ? setStartDate(date) : "")}
      timeInputLabel="Time:"
      dateFormat="dd/MM/yyyy hh:mm"
      showTimeInput
    />
  );
}
