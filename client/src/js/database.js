import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Function to PUT to the database
  console.log('Put to the database');

  // Create a connection to the database
  const jateDb = await opebDB('jate', 1);

  // Create a new read / write transaction
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the desired object stores
  const store = tx.objectStore('jate');
  console.log(content);

  // Use the .put method on the store and pass in content
  const request = store.put({id:1, value: content});

  // Confirm the request
  const result = await request;
  console.log('Data Saved to DB', result);

};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
