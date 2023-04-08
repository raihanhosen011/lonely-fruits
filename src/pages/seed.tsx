import type { NextPage } from "next";
//
import SeedPage from "@modules/Seed/Seed";


const Seed: NextPage = () => {
  return (
    <>
      <div id="__seed">
        <SeedPage />
      </div>
    </>
  );
};

export default Seed;