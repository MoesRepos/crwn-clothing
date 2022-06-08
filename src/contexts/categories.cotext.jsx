import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments, addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

//import SHOP_DATA from '../shop-data'

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // commented out. If not it will attempt to set this collection everytime it runs
    // useEffect(() => {
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // }, [])

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, []);
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}
