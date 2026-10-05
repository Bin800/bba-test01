# Tổng hợp kiến thức/ghi chú buổi 1

## 1. Câu lệnh khởi tạo project Playwrirght
- Câu lệnh: npm init playwright@latest

## 2. Câu lệnh tạo SSH key
- ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

## 3. Câu lệnh khởi tạo repo Git
- git init: chạy trong terminal khi của editor khi đã mở project

## 4. Câu lệnh add remote git
- git remote add origin <remote url>: chạy trong terminal khi của editor khi đã mở project
    + <remote url>: lấy phần SSH sau khi khởi tạo repo trên github

## 5. Câu lệnh thêm code vào vùng staging
- git add . : Add tất cả các file vào trong folder
- git add <tên file1> <tên file 2>: add file chỉ định
- 
## 6. Câu lệnh push code lên GitHub
- git push origin main

## 7. Câu lệnh sửa thông tin user trên Github
Áp dụng cho tất cả repo
- git config --global user.name <tên bạn>
- git config --global user.email <email>

Áp dụng cho repo cụ thể, chỉ chạy lệnh cho repo đó
- git config user.name "<tên bạn>"
- git config user.email "<email>"


---

Link khoá học: https://hoctest.com/khoa-hoc/fullstack-automation-qa-tu-chua-biet-gi-voi-playwright-typescript/
