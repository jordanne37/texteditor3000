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
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.log('getDb not implemented');
  
// Create a connection to the database.
const jateDb = await openDB('jate', 1);
  
// start new.
const tx = jateDb.transaction('jate', 'readonly');
  
// Open up specific object store.
 const store = tx.objectStore('jate');

// Use the .getAll() method to get all data in the database.
const request = store.get(1);
  
// confirm request.
const result = await request;
  
return result.todo;
 };
  
export const deleteDb = async (id) => {
console.log('DELETE from the database', id);
  
// Create a connection to the database.
 const jateDb = await openDB('todos', 1);
  
// start new.
const tx = jateDb.transaction('todos', 'readwrite');
  
// Open up specific object store.
const store = tx.objectStore('todos');
  
// Use the .delete() method to remove specific data in the database.
const request = store.delete(id);
  
// confirm request.
const result = await request;
console.log('result.value', result);
return result;
};
  
  
  initdb();
