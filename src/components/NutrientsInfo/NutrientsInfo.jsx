import React from "react";
import styles from "./NutrientsInfo.module.scss";
import List from "../List";

const NutrientsInfo = props => {
  const { displayStyle, nutrient } = props;
  // const testObj = {
  //   title: {nutrient.};
  //   information:
  //     "Magnesium is critical to our brain health and mood. It is an important co-factor for many enzymes, including those that are important for maintaining the balance of our neurotransmitters. Magnesium can help reduce anxiety, calm you down, and help you get to sleep.",
  //   list:["Foods High in Magnesium:" , "Almonds (dry roasted): 80 mg per 30g handful" , "Spinach (boiled): 7,820 mg per 1/2 cup" , "Cashews: 74 mg per 30g handful" , "Peanuts: 63mg per 30g handful" , "Soy milk: 61 mg per cup" , "Black beans (cooked): 60 mg per 1/2 cup" , "Peanut butter: 49 mg per 2 tbsp" , "Bread (whole wheat): 46 mg per 2 slices" , "Avocado: 44 mg per avocado" , "Potato: 43 mg per medium potato" , "Rice (brown, cooked): 42 mg per 1/2 cup"],
  //   subheading:"Should you supplement?",
  //   moreInformation:"You may benefit from supplementing with magnesium when you feel stressed, low in mood or if you have trouble sleeping. We recommend ‘magnesium bisglycinate’. While most other forms of magnesium supplements can cause gut symptoms, we recommend magnesium bisgycinate because it’s very easily absorbed and doesn’t cause any negative side effects. You may benefit from supplementing with magnesium when you feel stressed, low in mood or if you have trouble sleeping. That’s because Catechol-O-methyltransferase (COMT) is a magnesiumdependent, catecholamine-metabolizing enzyme. This means that COMT needs enough magnesium to function properly. You have a slower version of the COMT enzyme. Mineral-rich mineral water may also increase COMT activity due to the magnesium content. Your genotype is associated with increased activity of calcium channels, increasing your risk of mood dysregulation. As magnesium is a natural calcium channel blocker, taking a magnesium supplement when you feel low or agitated may help you feel more calm and contented."
  // };

  // Shea's code
  // const alcoholJsx = <p>{nutrientObj.alcoholAction}</p>;

  {
    /* {Shea's code} */
  }
  {
    /* {nutrientObj.name === "beta-carotene" ? alcoholJsx : null}; */
  }

  return (
    <>
      <section className={`${styles.nutrientInfo} ${styles[displayStyle]}`}>
        <h2>{nutrient.name}</h2>
        <p>{nutrient["requirement-action"]}</p>
        {/* <List listItems={nutrient.list} /> */}
        {/* <h3>{nutrient.subheading}</h3>
        <p>{nutrient.moreInformation}</p> */}
      </section>
    </>
  );
};

export default NutrientsInfo;
