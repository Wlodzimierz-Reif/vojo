import React, { useState } from "react";
import styles from "./PageEleven.module.scss";
import InputLabel from "../../../components/InputLabel";
import InputField from "../../../components/InputField";
import RadioButton from "../../../components/RadioButton";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../assets/characters/bean-2.svg";
import Arrow from "../../../assets/graphic-devices/primary-color-arrow-1.svg";
import BottomWave from "../../../assets/graphic-devices/grey-wave-bottom.svg";
import { Link } from "@reach/router";

const PageEleven = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <section>
          <h2>How would you describe your hair?</h2>
          <RadioButton
            text="5 – strong and healthy"
            name="hairRating"
            value="5 – strong and healthy"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="4 – OK but could be better"
            name="hairRating"
            value="4 – OK but could be better"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="3 – dull and lifeless"
            name="hairRating"
            value="3 – dull and lifeless"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="2 – brittle or thinner than usual"
            name="hairRating"
            value="2 – brittle or thinner than usual"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
          <RadioButton
            text="1 – terrible"
            name="hairRating"
            value="1 – terrible"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, hairRating: input })
            }
          />
        </section>
        <section>
          <h2>
            Do you have issues with your vision (other than
            short/long-sightedness)?
          </h2>
          <RadioButton
            text="Nope"
            name="eyeIssues"
            value="Nope"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, eyeIssues: input })
            }
          />
          <RadioButton
            text="Blurry vision"
            name="eyeIssues"
            value="Blurry vision"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, eyeIssues: input })
            }
          />
          <RadioButton
            text="Dry eyes"
            name="eyeIssues"
            value="Dry eyes"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, eyeIssues: input })
            }
          />
          <RadioButton
            text="I find it difficult to see in low light levels"
            name="eyeIssues"
            value="I find it difficult to see in low light levels"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, eyeIssues: input })
            }
          />
          <RadioButton
            text="Age-related macular degeneration"
            name="eyeIssues"
            value="Age-related macular degeneration"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, eyeIssues: input })
            }
          />
          <RadioButton
            text="Glaucoma"
            name="eyeIssues"
            value="Glaucoma"
            startChecked={false}
            selectRadio={input =>
              setFormValues({ ...formValues, eyeIssues: input })
            }
          />
        </section>
      </div>
      <Link to="../page-ten">
        <img className={styles.leftArrow} src={Arrow} />
      </Link>
      <Link to="../page-twelve">
        <img className={styles.rightArrow} src={Arrow} />
      </Link>
      <img className={styles.bottomWave} src={BottomWave} />
      <img className={styles.questionPerson} src={Image} alt="Veg" />
    </div>
  );
};

export default PageEleven;
