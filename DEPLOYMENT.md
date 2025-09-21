# Supabase Deployment Guide

## 📋 ขั้นตอนการ Deploy

### 1. สร้าง Supabase Project
1. ไปที่ [https://supabase.com](https://supabase.com)
2. สร้างบัญชีหรือเข้าสู่ระบบ
3. คลิก "New Project"
4. ตั้งชื่อ project และเลือก region
5. คัดลอก Project URL และ API Key

### 2. Login Supabase CLI
```bash
npx supabase login
```

### 3. Link Project
```bash
npx supabase link --project-ref YOUR_PROJECT_REF
```

หา Project Reference ได้จาก URL: `https://YOUR_PROJECT_REF.supabase.co`

### 4. Deploy Function
```bash
npx supabase functions deploy hello
```

### 5. Test Production Function
Function URL จะเป็น:
```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/hello
```

## 🔑 Environment Variables
สร้างไฟล์ `.env.local`:
```env
SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🌐 Public Access
Function นี้ไม่ต้องการ authentication และสามารถเรียกใช้ได้จาก browser โดยตรง

## 📚 Next Steps
1. เพิ่ม authentication ถ้าต้องการ
2. เชื่อมต่อกับ database
3. เพิ่ม error handling
4. เพิ่ม logging
5. เพิ่ม tests