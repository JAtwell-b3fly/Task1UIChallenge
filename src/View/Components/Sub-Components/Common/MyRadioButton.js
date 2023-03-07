import React from "react";
import { Radio,  } from "native-base";

const MyRadioButtonFunction = () => {
  const [value, setValue] = React.useState("one");
  return <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
    setValue(nextValue);
  }}>
      <Radio value="one" my={1}>
        female
      </Radio>
      <Radio value="two" my={1}>
      male
      </Radio>
    </Radio.Group>;
};


export  default MyRadioButtonFunction;
