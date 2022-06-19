import React from "react";
import home from "../../image/hackathonhome.svg"
function Home() {
  return (
    <div>
      <div class="home flex">
        {/* text */}
       
        <div class="flex-1 w-64 py-12 md:py-28 px-16 home-text">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 text-7xl  font-bold">Welcome sisters,<br />start your searching<br /> at one place.
         </h1>
        
        </div>
        <div class="flex-1 sm:50 md:w-32">
            <img src={home} alt=""  className="mt-12 pr-12 home-img"/>
        </div>
      </div>
      <footer class=" "></footer>
      {/* <img className="fixed" src={wave} alt="Svg"/> */}
    </div>
  );
}

export default Home;
