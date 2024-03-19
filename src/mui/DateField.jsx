import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const DateField = ({name="Date",value, change,...otherProps}) => {
  return (
    <Stack >
      <TextField
         name="someDate"
        label={name}
        // defaultValue={new Date().toISOString().split('T')[0]}
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        size="large"
        value={value}
        onChange={change}
        required={true}
        {...otherProps}
        // defaultValue={values.someDate}
      />
    </Stack>
  );
};

export default DateField;
