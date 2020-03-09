import React from "react";
import styles from "./QuestionnaireRadioButtons.module.scss";
import RadioButtons from "../../components/RadioButton";

const QuestionnaireRadioButtons = props => {
  const [formValues, setFormValues] = useState({});

  return (
    <>
      <RadioButton
        text="Vegan"
        question="vegan"
        value="isVegan"
        startChecked={true}
        selectRadio={input => setFormValues({ ...formValues, isVegan: input })}
      />
      <RadioButton
        text="Not Vegan"
        question="vegan"
        value="isNotVegan"
        selectRadio={input => setFormValues({ ...formValues, isVegan: input })}
      />
    </>
    </>
  );
};

export default QuestionnaireRadioButtons;
