// ตั้งค่าฐานข้อมูลกลางสำหรับระบบออกใบเสร็จรับเงิน RMUT
// ใช้ค่า Firebase จากข้อมูลที่แนบ และประกาศตัวแปรสำรองให้รองรับทั้งเว็บเวอร์ชันไฟล์เดียวและเวอร์ชันแยกไฟล์
window.RECEIPT_APP_DATABASE_CONFIG = {
  enabled: true,
  provider: "firebase",
  appName: "rmut-receipt-app",
  firebaseSdkVersion: "10.12.5",
  path: "receipt-app/main",
  firebaseConfig: {
    apiKey: "AIzaSyDoQFHYeaWLE1AXbQp58Fqmtnoam6GTeOI",
    authDomain: "rmut-receipt-app.firebaseapp.com",
    databaseURL: "https://rmut-receipt-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rmut-receipt-app",
    storageBucket: "rmut-receipt-app.firebasestorage.app",
    messagingSenderId: "794635845962",
    appId: "1:794635845962:web:0a8e7e2f77731b327b01b3",
    measurementId: "G-1NETTTH9Q7"
  }
};

window.APP_FIREBASE_CONFIG = window.RECEIPT_APP_DATABASE_CONFIG.firebaseConfig;
window.firebaseConfig = window.APP_FIREBASE_CONFIG;
window.APP_ENABLE_FIREBASE = true;
