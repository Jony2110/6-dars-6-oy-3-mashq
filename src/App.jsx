import { useEffect, useState } from 'react';
import styles from './App.module.css'
function App() {
  const [users, setUsers] = useState([]);

  async function getDataFromApi(url) {
    try {
      const response = await fetch(url);
      let data = [];
      if (response.status === 200) {
        data = await response.json();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataFromApi('https://jsonplaceholder.typicode.com/photos/')
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {users.length > 0 &&
        users.map((user, index) => {
          return (
            <div className={styles.container} key={index}>
            <div className={styles.boxFlex} >
            <h2>{user.id}</h2>
              <h2>{user.title}</h2>
              <img className={styles.img} src={user.url} alt="" />
            </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;