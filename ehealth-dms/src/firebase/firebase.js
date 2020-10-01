import app from 'firebase/app';
import 'firebase/auth';

  var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
    }
    createUser = (formData) => 
    this.auth.createUserWithEmailAndPassword(formData.email, formData.password)
    .then(respond => {
      respond.user.updateProfile({
        displayName: formData.fullname,
        photoURL: JSON.stringify({
          photo: formData.avatar,
          phone: formData.phone,
          country: formData.country,
          state: formData.state,
          city: formData.city,
        })
      })
      .then(() => respond.user.sendEmailVerification())
      localStorage.setItem('eHealthUser', JSON.stringify({email:respond.user.email, uid: respond.user.uid}));
    })
    resendEmailVerification = (user) => {
      if (user)
        return this.auth.currentUser.sendEmailVerification();      
    }

    signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut()
    .then(() => window.location.href = '/');

    passwordReset = email => this.auth.sendPasswordResetEmail(email);
 
  passwordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    getCurrentUser = () => this.auth.onAuthStateChanged(user => user);
  }
   
  export default Firebase;