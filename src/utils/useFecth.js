import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'
import { database, auth } from '../../firebaseConfig'
import ParseData from './ParseData'

const useFetch = () => {
    const [coffeeData, setCoffeeData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const userId = auth.currentUser.uid

    useEffect(() => {
        setLoading(true)
        const refData = ref(database, `UsedCoffe/${userId}`)
        onValue(refData, (snapshot) => {
            const data = snapshot.val();
            if (data != null) {
                const parsedData = ParseData(data)
                setCoffeeData(parsedData)
                setLoading(false)
                setError(false)
            }
        })
    }, [])
    //console.log(JSON.stringify(coffeeData))

    return { coffeeData, loading, error }
}

export default useFetch;