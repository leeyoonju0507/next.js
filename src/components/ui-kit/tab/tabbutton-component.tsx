import { useRouter } from "next/navigation";
import React from "react";
import  "./tabbutton.css"

const TabButtonComponent = (props:{text:string, path?:string,classnames?:any}) => {
  const {text, path, classnames=""} = props; 
  const router = useRouter();

  const link = (path: string | undefined) => {
    if (path) {
      router.push(path)
    }
  };

  return (
  <div 
    onClick={() => link(path)}
    className={`a ${classnames}`}
    >
      {text}
  </div>
  );
};

export default TabButtonComponent;
