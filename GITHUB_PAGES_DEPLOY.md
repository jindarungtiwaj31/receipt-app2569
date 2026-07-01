# วิธีเผยแพร่ด้วย GitHub Pages

เว็บนี้เป็น Static Web App ใช้ไฟล์หลัก `index.html` และเชื่อมฐานข้อมูลกลางผ่าน Firebase Realtime Database จึงสามารถเผยแพร่ด้วย GitHub Pages ได้

## ไฟล์ที่ต้องอัปโหลดขึ้น GitHub

ให้อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repository โดยให้ `index.html` อยู่ระดับบนสุดของ repository

ไฟล์สำคัญ:

- `index.html`
- `firebase-config.js`
- `.nojekyll`
- `assets/university-logo.png`
- `firebase.rules.json`
- `FIREBASE_SETUP.md`
- `README.md`

ไฟล์ `firebase.json` และ `.firebaserc` เป็นของ Firebase Hosting จะเก็บไว้ก็ได้ ไม่กระทบ GitHub Pages

## วิธีทำบน GitHub แบบไม่ใช้คำสั่ง

1. เข้า GitHub
2. กด `New repository`
3. ตั้งชื่อ repository เช่น `receipt-app`
4. เลือก `Public`
5. กด `Create repository`
6. กด `uploading an existing file`
7. ลากไฟล์ทั้งหมดในโฟลเดอร์นี้เข้าไป โดยต้องไม่ลากเป็น zip ทั้งก้อน
8. กด `Commit changes`
9. ไปที่ `Settings`
10. ไปที่ `Pages`
11. ที่ `Build and deployment` เลือก `Deploy from a branch`
12. เลือก Branch เป็น `main`
13. เลือก Folder เป็น `/(root)`
14. กด `Save`
15. รอประมาณ 1-10 นาที แล้วเปิด URL ที่ GitHub Pages แสดงให้

## URL ที่จะได้

ถ้า repository ชื่อ `receipt-app` URL จะเป็นประมาณนี้:

```txt
https://USERNAME.github.io/receipt-app/
```

ให้เปลี่ยน `USERNAME` เป็นชื่อ GitHub ของคุณ

ถ้าต้องการ URL สั้นแบบนี้:

```txt
https://USERNAME.github.io/
```

ให้ตั้งชื่อ repository เป็น:

```txt
USERNAME.github.io
```

## สิ่งที่ต้องทำใน Firebase ก่อนใช้งานจริง

1. เปิด Realtime Database ในโปรเจกต์ `rmut-receipt-app`
2. ไปที่ `Realtime Database > Rules`
3. นำ rules จากไฟล์ `firebase.rules.json` ไปวาง
4. กด `Publish`
5. เปิดเว็บจาก GitHub Pages แล้วดูสถานะมุมบนของระบบ ถ้าขึ้น `ฐานข้อมูลกลางเชื่อมต่อแล้ว` แปลว่าใช้หลายเครื่องได้แล้ว

## บัญชีเริ่มต้น

```txt
Admin username: admin
Admin password: admin123
```

หลังเข้าใช้งานครั้งแรก ให้ไปที่เมนู `ตั้งค่า Admin` แล้วเปลี่ยนรหัสผ่านทันที

## หมายเหตุสำคัญ

- ห้ามเปิดเว็บด้วยการพิมพ์ URL ติดกัน 2 อัน
- ให้ใช้ URL จาก GitHub Pages เพียงอันเดียว เช่น `https://USERNAME.github.io/receipt-app/`
- GitHub Pages เป็นที่ฝากไฟล์เว็บ ส่วนข้อมูลกลางยังอยู่ที่ Firebase Realtime Database
- ถ้าเปิดเว็บแล้วขึ้น 404 ให้รออีกสักครู่ หรือตรวจว่าเลือก Source เป็น `main` และ Folder เป็น `/(root)` แล้ว
