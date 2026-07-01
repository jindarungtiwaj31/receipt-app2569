# ระบบออกใบเสร็จรับเงิน RMUT

เว็บแอปสำหรับออกใบเสร็จรับเงินของมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ใช้งานผ่าน GitHub Pages และเชื่อมฐานข้อมูลกลางด้วย Firebase Realtime Database เพื่อให้หลายเครื่องใช้ข้อมูลร่วมกันได้

## สถานะปัจจุบัน

- ใช้งานผ่าน GitHub Pages จาก branch `main` folder `/(root)`
- ไฟล์หน้าเว็บหลักคือ `index.html`
- เว็บแยกไฟล์เป็น `index.html`, `style.css`, `app.js`, `firebase-config.js`
- เชื่อม Firebase Realtime Database โปรเจกต์ `rmut-receipt-app`
- แยกสิทธิ์ Admin และ User
- Admin เป็นผู้สร้างรหัส User ตัวเลข 4 หลักเองทั้งหมด
- Admin เปิด/ปิด User ได้ ถ้า User ถูกปิดจะไม่สามารถใช้งานต่อได้
- รองรับใบเสร็จต้นฉบับ/สำเนา รายงาน เล่มใบเสร็จ และข้อมูลหลังบ้าน
- โลโก้หน้าเว็บยังแสดงอยู่ตามปกติ แต่โลโก้มหาวิทยาลัยใต้ครุฑในหน้าใบเสร็จ/ตอนพิมพ์ถูกซ่อนแล้ว

## ไฟล์ที่ต้องมีใน GitHub Pages

```txt
index.html
style.css
app.js
firebase-config.js
firebase.rules.json
README.md
FIREBASE_SETUP.md
GITHUB_PAGES_DEPLOY.md
.nojekyll
```

> ห้ามลบ `app.js` และ `style.css` เพราะ `index.html` เรียกใช้ไฟล์สองไฟล์นี้โดยตรง ถ้าลบเว็บจะทำงานไม่ได้

## วิธีเผยแพร่ด้วย GitHub Pages

1. เข้า repository `receipt-app`
2. ไปที่ `Settings` > `Pages`
3. ที่ `Build and deployment` เลือก `Deploy from a branch`
4. Branch เลือก `main`
5. Folder เลือก `/(root)`
6. กด `Save`
7. เปิดเว็บที่ `https://jindarungtiwaj31.github.io/receipt-app/`

## ฐานข้อมูลกลาง Firebase

ไฟล์ `firebase-config.js` ตั้งค่า Firebase ของโปรเจกต์ `rmut-receipt-app` ไว้แล้ว และใช้ Realtime Database URL ของโปรเจกต์นี้

ให้นำ rules จากไฟล์ `firebase.rules.json` ไปวางใน Firebase Console > Realtime Database > Rules แล้วกด Publish

เมื่อเชื่อมต่อสำเร็จ มุมบนของเว็บจะแสดงสถานะว่า `ฐานข้อมูลกลางเชื่อมต่อแล้ว`

## วิธีใช้งานเริ่มต้น

1. เข้าเว็บ GitHub Pages
2. เลือก Admin
3. เข้าสู่ระบบด้วยบัญชี Admin เริ่มต้นที่ตั้งไว้ในหน้า Login
4. ไปที่หน้า `ผู้ใช้งาน`
5. สร้างรหัส User 4 หลักเอง เช่น `1001`
6. ส่งรหัส 4 หลักให้ผู้ใช้งานเข้าเว็บ URL เดียวกัน

ระบบไม่มี User ตัวอย่าง เพื่อให้ Admin เป็นผู้กำหนดผู้ใช้งานเองทั้งหมด

## การสำรองข้อมูล

เข้า Admin > `ฐานข้อมูลกลาง` แล้วใช้ปุ่ม:

- `สำรองฐานข้อมูล JSON` เพื่อดาวน์โหลดข้อมูลทั้งหมด
- `นำเข้า JSON` เพื่อกู้คืนข้อมูลจากไฟล์สำรอง
- `ส่งข้อมูลเครื่องนี้ขึ้นฐานกลาง` เพื่อย้ายข้อมูล local ไป Firebase หลังตั้งค่า Firebase สำเร็จ

## หมายเหตุด้านความปลอดภัย

เว็บนี้เป็น Static App ที่รันบน browser เหมาะกับงานภายใน ต้นแบบ หรือเดโม หากใช้กับข้อมูลเงินจริงหรือเปิดใช้งานสาธารณะ ควรเพิ่ม backend หรือ Firebase Authentication และ Rules ที่เข้มงวดกว่าเดิม
