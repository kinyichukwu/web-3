import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLqF47sS8H9DPomhwYlu693OOAgP8VhuM",
  authDomain: "crwn-clothing-db-fd5d6.firebaseapp.com",
  projectId: "crwn-clothing-db-fd5d6",
  storageBucket: "crwn-clothing-db-fd5d6.appspot.com",
  messagingSenderId: "975106281194",
  appId: "1:975106281194:web:3a6515bb811dfe94469193",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title?.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addDocumentToExistingDocumentInFirebase = async (
  productCategory,
  productToAdd
) => {
  if(productCategory && productToAdd){
 // check if the document exists in firebase already
 const docRef = doc(db, "categories", productCategory);
 const document = await getDoc(docRef);
 // if yes
 if (document.exists()) {
   let data = document.data();
   let { items } = data;
   let lengthOfData = items.length;
   productToAdd["id"] = lengthOfData;
   items.push(productToAdd);

   if (productToAdd.id) {
     await setDoc(doc(db, "categories", productCategory), {
       // using the spread operator to uptate doc
       ...{
         ...data,
         items: items,
       },
       title: productCategory,
     });
   }
 } else if (!document.exists()) {
   await setDoc(doc(db, "categories", productCategory), {
     items: [{ ...productToAdd, id: 1 }],
     title: productCategory,
   });
 }
  }
 

};

export const deleteDocumentToExistingDocumentInFirebase = async (
  productCategory,
  productToDelete
  // product to delete is an object
) => {
  // check if the document exists in firebase already
  const docRef = doc(db, "categories", productCategory);
  const document = await getDoc(docRef);
  // if yes
  if (document.exists()) {
    let data = document.data();
    let { items } = data;

    // delete items and store in a variable
    let index = items.findIndex((item) => {
      let obj = item.productName;
      return obj === productToDelete.productName;
    });
    

    let newItems = index >= 0 ? items.splice(index, 1) : items;
    console.log(index, "this is the index", items);
    // update items to that variable
    updateDoc(docRef, {
      items: items,
    }).then(() => {
      console.log("done updating");
    });
  } else if (!document.exists()) {
    console.log("document does not exist");
  }

};

// deleteDocumentToExistingDocumentInFirebase("hats", {
//   productName: "Brown Brim",
//   productCategory: "Hats",
// });
