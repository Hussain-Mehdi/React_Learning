import React, { useEffect } from 'react'

export default function MountUnMountComponent() {

    useEffect(()=>{
        console.log("Component is mounted");

        return ()=>{
            console.log("Component will unmount");
        }
    },[])
    
  return (
    <div>
      
    </div>
  )
}
