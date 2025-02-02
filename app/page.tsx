import React from "react";
import Link from "next/link";

const Home: React.FC = ()=> {

  return (
      <main>
          <h1 style={{ color: 'white', textAlign: 'center' }}>
              Time to get started!
          </h1>
          <ul>
              <li>
                  <Link href="/meals" >Meals</Link>
              </li>
              <li>
                  <Link href="/meals/share" >Share Meal</Link>
              </li>
              <li>
                  <Link href="/community" >Community</Link>
              </li>
              <li>
                  <Link href="/meals/meal-1" >Meal 1</Link>
              </li>
              <li>
                  <Link href="/meals/meal-2" >Meal 2</Link>
              </li>
          </ul>
      </main>
  );
}

export default Home;

/**
 * New routes:
 * /meals
 * /meals/share
 * /community
 * /meals/[slug]
 */
