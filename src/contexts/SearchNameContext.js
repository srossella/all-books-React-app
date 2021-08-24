import React, {createContext, useState} from 'react';

export const SearchNameContext= createContext();

const SearchNameContextProvider = (props) => {
    
    const [searchName,setSearchName] = useState('');

    
    return ( 
        <SearchNameContext.Provider value={[searchName, setSearchName]}>
            {props.children}
        </SearchNameContext.Provider>
     );
}
 
export default SearchNameContextProvider;