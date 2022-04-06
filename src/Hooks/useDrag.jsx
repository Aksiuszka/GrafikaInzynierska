import React, {useState, useEffect} from 'react';
const useDrag=(deps=[], ref, options)=> {
    const {
        onMouseUp =()=>{},
        onMouseDown =()=>{},
        onMouseMove =()=>{},
        onDrag =()=>{}
    } = options;

    const[drag, setDrag] = useState(false);

    const handleMouseUp=(e)=>{
        setDrag(false);
        onMouseUp(e);
    };
    const handleMouseDown=(e)=>{
        setDrag(true);
        onMouseDown(e);
    };
    const handleMouseMove=(e)=>{
        onMouseMove(e);
    if(drag){
        onDrag(e);
    }
}
useEffect(()=>{
const item = ref.current;
if(item){
    item.addEventListener("pointerdown", handleMouseDown);
    item.addEventListener("pointerup", handleMouseUp);
    item.addEventListener("pointermove", handleMouseMove);

    return()=>{
    item.removeEventListener("pointerdown", handleMouseDown);
    item.removeEventListener("pointerup", handleMouseUp);
    item.removeEventListener("pointermove", handleMouseMove);

    };
}
return () => {};
}, [...deps, drag]);
   return {drag};
};

export default useDrag;
