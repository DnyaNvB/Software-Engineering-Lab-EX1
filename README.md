
# Software-Engineering-Lab EX1
<div dir="rtl">

# سوال ۱.


**پوشه‌ی .git**

پوشه‌ی `.git` در واقع پوشه‌ای است که سیستم کنترل نسخه‌ی گیت از آن برای ذخیره‌ی اطلاعات مربوط به تاریخچه‌ی پروژه استفاده می‌کند. این پوشه شامل تمامی داده‌های مربوط به تغییرات، تاریخچه‌ی کامیت‌ها، شاخه‌ها (branches)، تگ‌ها و دیگر اطلاعات مربوط به پروژه است. به طور کلی، اطلاعات کل پروژه در این پوشه ذخیره می‌شود تا گیت بتواند تغییرات را پیگیری و مدیریت کند.


**اطلاعاتی که در پوشه‌ی `.git` ذخیره می‌شود:**
 
<div dir="rtl">
1. **objects**: اطلاعات مربوط به کامیت‌ها، درخت‌ها (trees)، و بلاک‌ها (blobs) که شامل فایل‌ها و تغییرات آنها است.
<div dir="rtl">
<div dir="rtl">
2. **branches**: فایل‌هایی که شاخه‌های مختلف پروژه و آخرین کامیت‌های مربوط به هر شاخه را نشان می‌دهند.
<div dir="rtl">
<div dir="rtl">
3. **tags**: اطلاعات مربوط به نسخه‌های خاصی از پروژه که با یک تگ مشخص می‌شوند.
<div dir="rtl">
<div dir="rtl">
4. **refs**: شامل شاخه‌ها و تگ‌های پروژه است که گیت از آنها برای پیگیری مکان فعلی شاخه‌ها استفاده می‌کند.
<div dir="rtl">
<div dir="rtl">
5. **config**: تنظیمات مرتبط با گیت مخزن یا repository، شامل اطلاعات مربوط به remote‌ها (مانند آدرس‌های URL مخازن) و تنظیمات دیگر.
<div dir="rtl">
<div dir="rtl">
6. **staging area**: جایی که فایل‌ها برای کامیت بعدی آماده‌سازی می‌شوند.
<div dir="rtl">

**دستور ساخت پوشه‌ی `.git`:**

این پوشه با اجرای دستور زیر در دایرکتوری اصلی پروژه ساخته می‌شود:
<div dir="ltr">

```bash
git init
```

<div dir="rtl">
این دستور یک مخزن Git جدید ایجاد کرده و سیستم کنترل نسخه را فعال می‌کند.

---


# سوال ۵.
**مرحله (stage) یا (Index):**

در گیت **Stage** یا **Index** بخشی است که ما تغییرات خود را قبل از انجام **Commit** در آن جمع‌آوری می‌کنیم. وقتی فایل‌ها را در دایرکتوری‌مان تغییر می‌دهیم، این تغییرات به‌طور خودکار توسط گیت ردیابی نمی‌شوند. با استفاده از دستور `git add`، تغییرات مورد نظر را به **Stage** اضافه می‌کنیم تا به‌صورت انتخابی تعیین کنیم کدام تغییرات در Commit بعدی قرار داده شوند و در نتیجه کنترل بیشتری بر تاریخچه پروژه‌مان داشته باشیم.

**`git stash`:**

دستور `git stash` تغییرات **Uncommitted** ما را به‌طور موقت ذخیره می‌کند. این دستور تمام تغییرات در فایل‌های ردیابی‌شده و Stage شده را در یک **stash** جدید ذخیره می‌کند و دایرکتوری‌مان را به آخرین **Commit** (HEAD) بازمی‌گرداند. این کار برای زمانی مفید است که می‌خواهیم به شاخه دیگری برویم یا به‌طور موقت روی چیز دیگری کار کنیم، بدون اینکه تغییرات فعلی‌مان را از دست بدهیم. برای بازیابی تغییرات stash شده، می‌توانیم از `git stash apply` (برای اعمال تغییرات و نگه داشتن آن‌ها در لیست stash) یا `git stash pop` (برای اعمال تغییرات و حذف آن‌ها از لیست stash)) استفاده کنیم.

**مثال برای Stage (Index):**

<div dir="ltr">

```bash
echo "New content" >> file.txt
git add file.txt
git commit -m "Updated file.txt"
```

<div dir="rtl">

**مثال برای `git stash`:**

<div dir="ltr">


```bash
git stash
git checkout other-branch
git checkout main
git stash pop
```

# سوال ۶.


در گیت، وقتی از **Snapshot** صحبت می‌کنیم، داریم به یک تصویر لحظه‌ای از وضعیت فایل‌ها و پوشه‌های پروژه در یک زمان خاص اشاره می‌کنیم. هر بار که ما یک **commit** انجام می‌دهیم، گیت از تمام فایل‌ها و پوشه‌های پروژه در آن لحظه یک **Snapshot** ثبت می‌کند. این Snapshotفقط تغییرات جزئی رو نشان نمی‌دهد، بلکه کل وضعیت پروژه رو در اون لحظه ذخیره می‌کند.

### ارتباط **Snapshot** با **Commit**:
در واقع هر **commit** در گیت همان **Snapshot** پروژه‌ست. وقتی ما تغییراتی در فایل‌هایمان ایجاد می‌کنیم و آن‌ها را با `git add` به مرحله‌ی استیج اضافه می‌کنیم، و بعد با `git commit` وضعیت فعلی پروژه را ثبت می‌کنیم، در واقع داریم یک **Snapshot** جدید از کل پروژه ایجاد می‌کنیم. هر commit شامل مواردی مثل:
- **tree**: که ساختار دایرکتوری و فایل‌ها رو نگه می‌دارد،
- **parent commit**: که به Snapshot‌های قبلی اشاره می‌کند،
- و اطلاعاتی مثل نویسنده، تاریخ، و پیام commit که توضیح می‌دهد چه تغییراتی انجام شده است.

با این ویزگی‌ها می‌توانیم تاریخچهٔ پروژه را دنبال کنیم، بین Snapshot‌های مختلف تغییرات را مقایسه کنیم و در صورت نیاز به هر Snapshot خاص برگردیم. برای مثال، وقتی دستور `git rev-parse HEAD` را اجرا می‌کنیم، می‌توانیم یک commit مشخص را بر اساس هش (SHA-1) آن ببینیم و به وضعیت پروژه در آن زمان دسترسی پیدا کنیم.

درواقع هر **commit** یک **Snapshot** از وضعیت فایل‌های پروژه در اون لحظه‌ست تا در هر زمان به یک نقطه از تاریخچه برگردیم و تغییرات پروژه را مدیریت کنیم؛ و با این ویژگی‌ها می‌توانیم کارهایی مثل مدیریت برنچ‌ها و مرج در گیت خیلی راحت‌تر و بهتر باشد.
<div dir="rtl">
