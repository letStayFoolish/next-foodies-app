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
          </ul>
      </main>
  );
}

export default Home;
