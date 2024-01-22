import { useEffect, useState } from 'react';
import useFetch from './useFecth'
import { auth, database } from '../../firebaseConfig';
import { limitToFirst, onValue, orderByChild, query, ref, startAfter, startAt } from 'firebase/database';
import ParseData from './ParseData';

const useFetchFilter = () => {
  const [coffeeData, setCoffeeData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userId = auth.currentUser.uid
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;


  useEffect(() => {
    setLoading(true)
    const refData = query(ref(database, `UsedCoffe/${userId}`), orderByChild('/pushData/date'), startAt(formattedDate))
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


export default useFetchFilter
