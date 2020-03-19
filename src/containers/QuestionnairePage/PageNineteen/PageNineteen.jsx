import React, { useState } from "react";
import styles from "./PageNineteen.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/blueberry-1.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageNineteen = props => {
  const { masterValues, changeMaster } = props;

  const [formValues, setFormValues] = useState({});

  const updateMasterValues = () => {
    changeMaster({ ...masterValues, ...formValues });
  };

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.arrows}>
          <Link to="../page-eighteen">
            <img
              className={styles.leftArrow}
              src={Arrow}
              onClick={updateMasterValues}
            />
          </Link>
          <Link to="../page-twenty">
            <img
              className={styles.rightArrow}
              src={Arrow}
              onClick={updateMasterValues}
            />
          </Link>
        </div>
        <section>
          <h2>Do you use a pressue cooker?</h2>
          <RadioButton
            text="Yes"
            name="pressureCooker"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, pressureCooker: input })
            }
          />
          <RadioButton
            text="No"
            name="pressureCooker"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, pressureCooker: input })
            }
          />
        </section>
        <section>
          <h2>Do you sprout your beans, grains, nuts or seeds?</h2>
          <RadioButton
            text="Yes"
            name="soaking"
            value="Yes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="No"
            name="soaking"
            value="No"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
          <RadioButton
            text="Sometimes"
            name="soaking"
            value="Sometimes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, soaking: input })
            }
          />
        </section>
      </div>

      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageNineteen;
