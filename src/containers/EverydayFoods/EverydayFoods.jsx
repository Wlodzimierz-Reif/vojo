import React, { useState, useEffect } from "react";
import styles from "../EverydayFoods/EverydayFoods.module.scss";
import InfoList from "../../components/InfoList";
import { firestore } from "../../firebase";
// import Mockdata from "../../data";

const EverydayFoods = props => {
  const { user } = props;

  // const addToDataBase = () => {
  //   firestore
  //     .collection("users")
  //     .doc(user.uid)
  //     .set({ userApiData: Mockdata })
  //     // .then(() => {
  //     //   fetchUserData();
  //     // })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const getItemJsx = () => {
    return foods.map(item => (
      <InfoList infoHeaderBlack={item["food-stuffs"].name} infoHeaderPurple={item} foodList={item} />
    ))};
    
  return (
    
      <div className={styles.listImage}>
        <section className={styles.dietContainer}>
          {/* <button onClick={addToDataBase}>im angry an upset</button> */}
          <h3 className={styles.title}>Your go-to everyday foods</h3>
          {getItemJsx}
          {/* <InfoList
            infoHeaderBlack={user.uid["food-stuffs"].name}
            infoHeaderPurple={"Coconut or Soya"}
            foodList={
              "Plant-based milks and yoghurts are a good alternative to dairy foods and can be a good source of vitamins and minerals, such as calcium, as they are often fortified. As you handle fats better than carbohydrates, go for coconut or soya milk as these are higher in fat and lower in carbohydrate." */}
            {/* }
          /> */}
          {/* <InfoList
            infoHeaderBlack={"Other Vegan Dairy Alternatives"}
            foodList={
              "There is an increasing variety of plant-based cheeses and spreads, but these are highly processed foods, often high in fat and salt, so should only be eaten as a occasionally."
            }
          />
          <InfoList
            infoHeaderBlack={"Your cooking oil: "}
            infoHeaderPurple={"Coconut or olive"}
            foodList={
              "Your Cooking Oil: Coconut or Olive Some fat in the diet is essential to absorb nutrients. Choose fats from whole foods like flaxseeds, nuts, and avocados as opposed to refined, liquid oils where possible. If using oil, it's best for you to use coconut oil or olive oil for cooking."
            }
          />
          <InfoList
            infoHeaderBlack={"Your Go-To Breakfast: "}
            infoHeaderPurple={"Tofu Scramble with Spinach & Avocado"}
            foodList={
              "Your Go-To Breakfast: Tofu Scramble with Spinach & Avocado Ditch the porridge and toast in the mornings and go for a healthy combo of fats and protein instead. It'll be better for your blood sugar!"
            }
          />
          <InfoList
            infoHeaderBlack={"Your Guilty Pleasure: "}
            infoHeaderPurple={"Dark Chocolate"}
            foodList={
              "We all have that food... and yours is a good dose of dark chocolate now and again!"
            } */}
          </>
        </section>
      </div>
  
  );
};

export default EverydayFoods;
