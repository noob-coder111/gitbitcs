import { useState, createContext, useContext } from "react";

const DeleteContext = createContext(null);
export const DeleteProvider = ({children}) =>{
    const [deletePostId, setDeletePostId] = useState(null);
    const [editedPostId, setEditedPostId] = useState(null);

    const postDeleted = (deletePostId) =>{
        setDeletePostId(deletePostId);
    } 
    const postEdited = (editedPostId) =>{
        setEditedPostId(editedPostId);
    }

    return(
        <DeleteContext.Provider value={{deletePostId, editedPostId, postDeleted, postEdited}}>
            {children}
        </DeleteContext.Provider>
    );
};

export const useDelete = () =>{
    return useContext(DeleteContext)
}
