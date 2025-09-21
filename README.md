# Supabase Edge Functions Test Project

โปรเจกต์ทดสอบ Supabase Edge Functions แบบง่ายๆ

## 🚀 Features
- Supabase Edge Function "hello"
- พร้อมใช้งานกับ VS Code, GitHub, Supabase และ Vercel
- TypeScript support
- CORS enabled

## 📁 Project Structure
```
.
├── package.json
├── test-function.html          # HTML สำหรับทดสอบ function
└── supabase/
    ├── config.toml
    └── functions/
        └── hello/
            ├── deno.json
            └── index.ts        # Main function
```

## 🔧 Local Development

### ติดตั้ง Dependencies
```bash
npm install
```

### รัน Function แบบ Local (ด้วย Deno)
```bash
cd supabase/functions/hello
deno run --allow-net --allow-env index.ts
```

Function จะรันที่ `http://localhost:8000`

### รัน Function แบบ Local (ด้วย Supabase CLI)
```bash
npx supabase functions serve
```

## 🌐 Testing

เปิดไฟล์ `test-function.html` ใน browser เพื่อทดสอบ function

หรือใช้ curl:
```bash
curl http://localhost:8000
```

## 🚀 Deployment

### Deploy ไป Supabase
```bash
npx supabase functions deploy hello
```

### Deploy ไป Vercel
เชื่อมต่อ repository นี้กับ Vercel และ deploy

## 📝 API Response
```json
{
  "message": "Hello from Supabase Edge Functions! 🚀",
  "timestamp": "2025-09-22T...",
  "method": "GET",
  "url": "...",
  "userAgent": "..."
}
```

## 🛠 Tech Stack
- **Runtime**: Deno
- **Language**: TypeScript
- **Platform**: Supabase Edge Functions
- **Deployment**: Supabase + Vercel
- **Version Control**: Git + GitHub

## 📚 Resources
- [Supabase Edge Functions Docs](https://supabase.com/docs/guides/functions)
- [Deno Documentation](https://deno.land/manual)
- [Vercel Documentation](https://vercel.com/docs)