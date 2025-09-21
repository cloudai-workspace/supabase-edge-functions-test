# 🚀 Supabase Edge Functions Test Project

โปรเจกต์ทดสอบ Supabase Edge Functions แบบครบวงจร พร้อม VS Code, GitHub, และ Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/supabase-edge-functions-test)

## ✨ Features

- 🏠 **Local Development** - รันด้วย Deno
- ☁️ **Supabase Edge Functions** - Production deployment
- 🌐 **Vercel Frontend** - HTML interface สำหรับทดสอบ
- ⚙️ **VS Code Integration** - Tasks และ Extensions
- 🔧 **TypeScript Support** - Type safety
- 🌍 **CORS Support** - เรียกใช้จาก browser ได้

## 📁 Project Structure

```
.
├── README.md
├── package.json
├── vercel.json                 # Vercel deployment config
├── test-function.html          # HTML interface สำหรับทดสอบ
├── .vscode/
│   └── tasks.json             # VS Code tasks
└── supabase/
    ├── config.toml
    └── functions/
        └── hello/
            ├── deno.json
            └── index.ts        # Main function
```

## � Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/supabase-edge-functions-test.git
cd supabase-edge-functions-test
npm install
```

### 2. Local Development
```bash
# วิธีที่ 1: ใช้ VS Code Task
# กด Ctrl+Shift+P → "Tasks: Run Task" → "Start Supabase Function (Deno)"

# วิธีที่ 2: รันด้วย command line
cd supabase/functions/hello
deno run --allow-net --allow-env index.ts
```

### 3. Production Deployment

#### Supabase:
```bash
npx supabase login
npx supabase link --project-ref YOUR_PROJECT_REF
npx supabase functions deploy hello
```

#### Vercel:
1. Push ไป GitHub
2. Import repository ใน Vercel
3. Deploy อัตโนมัติ

## 🌐 Live URLs

- **Local Function**: `http://localhost:8000`
- **Production Function**: `https://YOUR_PROJECT.supabase.co/functions/v1/hello`
- **Test Interface**: `https://YOUR_PROJECT.vercel.app`

## 🧪 Testing

### Local Testing:
เปิด `test-function.html` ใน browser หรือเข้า `http://localhost:8000`

### Production Testing:
1. เข้า Vercel URL
2. ใส่ Supabase Function URL
3. ใส่ API Key (ถ้าจำเป็น)
4. กดทดสอบ

## � API Response

```json
{
  "message": "Hello from Supabase Edge Functions! 🚀",
  "timestamp": "2025-09-22T...",
  "method": "GET",
  "url": "...",
  "userAgent": "...",
  "status": "online",
  "authStatus": "authenticated|anonymous",
  "publicAccess": true,
  "deployment": "production"
}
```

## 🛠 Tech Stack

- **Runtime**: Deno
- **Language**: TypeScript
- **Backend**: Supabase Edge Functions
- **Frontend**: HTML/CSS/JavaScript
- **Deployment**: Vercel + Supabase
- **Version Control**: Git + GitHub
- **IDE**: VS Code

## � Development

### VS Code Extensions:
- Supabase Extension
- Deno Language Server
- Prettier Code Formatter

### Available Tasks:
- `🚀 Start Local Function` - รัน function ใน local
- `Deploy Supabase Function` - Deploy ไป production
- `Test Local Function` - ทดสอบด้วย curl

## 📄 License

MIT License

## 🤝 Contributing

1. Fork the project
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

Made with ❤️ using Supabase Edge Functions