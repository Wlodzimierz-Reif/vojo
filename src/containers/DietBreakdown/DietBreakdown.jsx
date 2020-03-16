import React from "react";
import styles from "./DietBreakdown.module.scss";
import VegPictureBox from "../../components/VegPictureBox";
import DietVeg from "../../components/DietVeg";
import beet from "../../assets/characters/beetroot-1.svg";
import broc from "../../assets/characters/broccoli-1.svg";
import carrot from "../../assets/characters/carrot-1.svg";

const DietBreakdown = props => {
  const { brief, title } = props;

  return (
    <>
      <div>
        <section className={styles.secInfo}>
          <h2 className={styles.title}>Your diet breakdown</h2>
          <section className={styles.imgs}>
            <div className={styles.primary}>
              <VegPictureBox pText={"Rainbow veg"} image={carrot} />
            </div>
            <div className={styles.primary}>
              <VegPictureBox pText={"Leafy greens"} image={broc} />
            </div>
            <div className={styles.primary}>
              <VegPictureBox pText={"Root veg"} image={beet} />
            </div>
          </section>
          <p>{brief}</p>
        </section>

        <section className={styles.secInfo}>
          <div>
            <DietVeg
              imagesForVegBx={carrot}
              txtForVegBx={"Root Veg"}
              brief={"dfsugiardoeioiudragub"}
            />
          </div>
          <div>
            <DietVeg
              imagesForVegBx={carrot}
              txtForVegBx={"Root Veg"}
              brief={"dfsugiardoeioiudragub"}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default DietBreakdown;
