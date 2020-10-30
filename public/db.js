// creates variable for database
let db;

// creates a new db request for a "budget" database
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = event => {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = event => {
    db = event.target.result;

    // checks if app is online before going to the database
    if (navigator.onLine) {
        checkDatabase();
    }
};

// logs any error to console
request.onerror = event => {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    // creates a transaction on the pending db with readwrite access
    const transaction = db.transaction(["pending"], "readwrite");

    // accesses pending object store
    const store = transaction.objectStore("pending");

    // adds record to store via the add method
    store.add(record);
}

function checkDatabase() {
    // opens a transactionn on pending db
    const transaction = db.transaction(["pending"], "readwrite");

    // accesses pending object store
    const store = transaction.objectStore("pending");

    // gets all records from store and sets them to a variable
    const getAll = store.getAll();

    getAll.onsuccess = () => {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(() => {
                // if successful, opens a transaction on pending db
                const transaction = db.transaction(["pending"], "readwrite");

                // accesses pending object store
                const store = transaction.objectStore("pending");

                // clears all items in store
                store.clear();
            });
        }
    };
}

// listens for app to come back online
window.addEventListener("online", checkDatabase);