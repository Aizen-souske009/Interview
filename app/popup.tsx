import React from "react";
type PopupProps={
    open:boolean;
    onclose:()=> void;
    title?:string;
    children?:React.ReactNode;
};

export const Popup:React.FC<PopupProps>=({open,onclose,title,children})=>{
    if (!open) return null;
    return(
        <div className="popup-backdrop" role="dialog" aria-modal="true">
            <div className ="popup-card">
                <div className="popup-header">
                <strong>{title ??"Popup"}</strong>
                <button aria-label = "Close popup" onClick={onclose}></button>
            </div>
            <div className="popup-body">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
