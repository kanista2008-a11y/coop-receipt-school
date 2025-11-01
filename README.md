# โปรแกรมออกใบเสร็จสหกรณ์โรงเรียน (Electron → Windows .exe ด้วย GitHub Actions)

## ใช้งานแบบนักพัฒนา
```
npm install
npm start
```

## สร้างไฟล์ติดตั้ง Windows (.exe) บน GitHub Actions
1) อัปโหลดโปรเจกต์นี้ขึ้น GitHub
2) ตรวจว่าไฟล์ `.github/workflows/win-build.yml` อยู่
3) ไปที่ Actions → เลือก workflow “Build Windows .exe” → Run workflow
4) ดาวน์โหลด Artifact: Coop-Receipt-Windows (ไฟล์ .exe อยู่ข้างใน)
