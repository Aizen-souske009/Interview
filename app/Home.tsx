"use client";

import React, { useState } from "react";
import { BlurTextLink } from "./blur";
import Popup from "./popup";

export const Home: React.FC = () => {
    const [popupOpen, setPopupOpen]=useState(false);

    return(
        <main style={{padding:24,fontFamily:"system-ui,sans-serif"}}>
            <h1>Task A -- React Bits</h1>
            <section style={{marginTop:18}}>
                <p>
                    Build samll UI components and integrate them on the homepage.
                </p>
                <div style = {{marginTop : 12}}>
                    <BlurTextLink
                    href="#"
                    active={popupOpen}
                    onClick={(e)=>{
                        e.preventDefault();
                        setPopupOpen((s)=>!s);
                    }}>
                        Blur Text - Link
                    </BlurTextLink>
                    <div style={{marginTop:8}}>
                        <button onClick={()=> setPopupOpen(true)}> Open popup</button>
                        <button style ={{marginLeft:8}}onClick={()=> setPopupOpen(false)}>Closepopup</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;