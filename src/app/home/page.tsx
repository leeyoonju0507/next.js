"use client";
import TabButtonComponent from "@/components/ui-kit/tab/tabbutton-component";

const HomePage = () => {
  
  return (
    <>
    <div style={{display:"flex",flexDirection: "column",height:"100vh"}}>
      <div style={{flex:1}}></div>
      <div style={{display:"flex", width:"100vw"}}>
        <TabButtonComponent 
          text={"feed"}
          path={"detail/feed"}
          />
        <TabButtonComponent
          text={"write feed"}
          path={"detail/writefeed"}
          />
        <TabButtonComponent
          text={"chat"}
          path={"detail/chat"}
        />
        <TabButtonComponent
          text={"profile"}
          path={"detail/profile"}  
        />
      </div>
    </div>
    </>
  );
};

export default HomePage;
