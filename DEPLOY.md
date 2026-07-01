# วิธีเผยแพร่เว็บให้ผู้อื่นเข้าใช้งานได้

แนะนำให้ใช้ Firebase Hosting เพราะเว็บนี้ใช้ Firebase Realtime Database อยู่แล้ว และสามารถ deploy เว็บ static HTML/CSS/JavaScript ได้โดยตรง

## สิ่งที่ต้องทำก่อนเผยแพร่

1. เปิด Firebase Console โปรเจกต์ `rmut-receipt-app`
2. เปิดใช้งาน Realtime Database
3. ไปที่ Realtime Database > Rules
4. นำเนื้อหาในไฟล์ `firebase.rules.json` ไปวาง แล้วกด Publish
5. ตรวจว่า `databaseURL` ใน `firebase-config.js` ตรงกับ URL ของ Realtime Database จริง

## วิธีเผยแพร่ด้วย Firebase Hosting

เปิด Terminal / Command Prompt ในโฟลเดอร์โปรเจกต์นี้ แล้วรันคำสั่ง:

```bash
npm install -g firebase-tools
firebase login
firebase use rmut-receipt-app
firebase deploy
```

หลัง deploy เสร็จ Firebase จะแสดง URL ประมาณนี้:

```txt
https://rmut-receipt-app.web.app
https://rmut-receipt-app.firebaseapp.com
```

ให้นำ URL นี้ส่งให้ผู้ใช้งานคนอื่นเข้าใช้ระบบได้เลย

## วิธีอัปเดตเว็บครั้งถัดไป

ถ้าแก้ไฟล์เว็บแล้วต้องการอัปเดต ให้รันคำสั่งเดิมอีกครั้ง:

```bash
firebase deploy
```

## บัญชีเริ่มต้น

Admin เริ่มต้น:

```txt
username: admin
password: admin123
```

หลังเข้าใช้งานครั้งแรก ให้ไปที่หน้า `ตั้งค่า Admin` แล้วเปลี่ยนรหัสผ่านทันที

## หมายเหตุ

- ผู้ใช้หลายคนเปิด URL เดียวกันจากหลายเครื่องได้
- ข้อมูลจะอยู่ใน Firebase Realtime Database
- Admin ต้องเพิ่ม User รหัส 4 หลักก่อน ผู้ใช้จึงจะเข้าใช้งานได้
- ถ้าเว็บขึ้นสถานะ `ฐานข้อมูลกลางเชื่อมต่อแล้ว` แปลว่าพร้อมใช้งานหลายเครื่อง
