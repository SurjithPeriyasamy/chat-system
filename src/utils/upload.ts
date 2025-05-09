import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../lib/firebase";

export const upload = async (file): Promise<string> => {
  const date = new Date();
  const storageRef = ref(storage, `images/${date + file.name} `);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((res, rej) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        rej("Something went wrong! " + error.code);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          res(downloadURL);
          console.log("File available at", downloadURL);
        });
      }
    );
  });
};
