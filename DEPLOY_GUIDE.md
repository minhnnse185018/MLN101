# Hướng Dẫn Deploy Lên Vercel

Dự án này là một ứng dụng **React (Vite)** nên việc deploy lên Vercel rất đơn giản và hoàn toàn miễn phí.

## Cách 1: Deploy Bằng Giao Diện Web (Khuyên dùng)

1. **Đẩy code lên GitHub**:
   - Tạo một repository mới trên GitHub.
   - Run các lệnh sau tại thư mục dự án:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin <LINK_REPO_CUA_BAN>
     git push -u origin main
     ```

2. **Kết nối với Vercel**:
   - Truy cập [vercel.com](https://vercel.com) và đăng nhập (bằng GitHub).
   - Nhấn **"Add New..."** button -> **"Project"**.
   - Chọn repository bạn vừa tạo.
   - Nhấn **Import**.

3. **Cấu hình (Tự động)**:
   - Vercel sẽ tự động nhận diện đây là dự án Vite.
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Nhấn **Deploy**.

Sau khoảng 1 phút, website sẽ hoạt động online!

## Cách 2: Deploy Bằng Dòng Lệnh (Nhanh)

1. Cài đặt Vercel CLI (nếu chưa có):
   ```bash
   npm install -g vercel
   ```

2. Chạy lệnh deploy:
   ```bash
   vercel
   ```
   - Chọn `Y` (Yes) cho các câu hỏi mặc định.

## Lưu ý quan trọng
- Do sử dụng *Client-side Routing* (React Router), bạn cần thêm file `vercel.json` vào thư mục gốc dự án nếu gặp lỗi 404 khi f5 trang con.

**Nội dung file `vercel.json`:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
*Đã thêm sẵn file này vào dự án.*
