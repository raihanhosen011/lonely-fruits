import type { NextPage } from "next";
//
import HomePage from "@modules/Home";

const Home: NextPage = () => {
    return (
        <>
            <div id="__home">
                <HomePage />
            </div>
        </>
    );
};

export default Home;
