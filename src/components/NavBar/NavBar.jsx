import React from 'react';
import styles from './NavBar.module.scss';
import logos from '../../assets/logos/tofu-logo.png';
import { Link } from '@reach/router';

// TO BE HANDED IN AS PROPS (SEE MATE AND DENNIS!!! )
// const exampleLinks = [
//   "Priorities",
//   "Nutrients",
//   "Diet",
//   "Health",
//   "Genetics",
//   "Answers",
//   "Settings"
// ];

const getLinks = (link) => {
	return <p> {link} </p>;
};

const NavBar = (props) => {
	const { links } = props;

	return (
		<section className={styles.navBar}>
			<img src={logos} alt="Logo" className={styles.navBarLogo} />
			<section className={styles.links}>
				{links.map(getLinks)}
				{/* THIS LINK BELOW IS JUST TO DEMO THE PAYMENT PAGE PLEASE REMOVE AFTER DEMO :) CHARLIE + LUCIAN */}
				<Link to="../payment-page" className={styles.links}>
					<p>Pay now</p>
				</Link>
				<p className={styles.logOut}>Log out</p>
			</section>
		</section>
	);
};

export default NavBar;
