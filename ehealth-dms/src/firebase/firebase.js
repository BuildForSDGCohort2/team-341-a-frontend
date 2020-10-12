import app from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

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
      this.db = app.firestore();
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
          isAdmin: formData.isAdmin,
          dob: formData.dob,
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

  createHospitals = (formData) => this.db.collection('hospitals')
                    .add({
                        name: formData.hospitalName,
                        contactPerson: formData.contactPerson,
                        contact: formData.contact,
                        country: formData.country,
                        state: formData.state,
                        services: formData.services,
                        city: formData.city,
                        geolocation: new app.firestore.GeoPoint(formData.latlong.lat, formData.latlong.long) //new Firestore.GeoPoint(37.422, 122.084) 
                      });
   getUniqueHospitals = (id) => this.db.collection('hospitals')
                        .doc(id).get();
    deleteHospital = (id) => this.db.collection('hospitals')
                     .doc(id).delete();
    updateHospital = (key, formData) => this.db.collection('hospitals')
                      .doc(key).set({
                        name: formData.hospitalName,
                        contactPerson: formData.contactPerson,
                        contact: formData.contact,
                        country: formData.country,
                        state: formData.state,
                        services: formData.services,
                        city: formData.city,
                        geolocation: new app.firestore.GeoPoint(formData.latlong.latitude, formData.loc.latlong)
                      });
    getAllHospitals = () => this.db.collection('hospitals').get().orderBy("name", "asc");
  }
   
  export default Firebase;