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
console.log('putDb not implemented');

 // Create a connection to the database.
 const jateDb = await openDB('jate', 1);

//  start new
 const tx = jateDb.transaction('jate', 'readwrite');
// open specific object thats stored.
 const store = tx.objectStore('jate');

  // Use the .put() method to add data in the database.
 const request = store.put({ id: 1, todo: content });

  // confirm
 const result = await request;
 console.log('data saved', result);

};
