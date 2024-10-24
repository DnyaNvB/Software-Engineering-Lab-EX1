
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
# سوال ۲.

<div dir="rtl">

منظور از atomic بودن در زمینه‌ی کامیت‌ها (atomic commit) و پول‌ریکوئست‌ها (atomic pull-request)، این است که این عملیات به صورت یک واحد یکپارچه و غیرقابل تقسیم انجام می‌شود. به بیان ساده‌تر، یا تمامی تغییرات مربوط به یک کامیت یا پول‌ریکوئست به طور کامل انجام می‌شود یا هیچ‌یک از آن‌ها اعمال نمی‌شود. به این ترتیب، وضعیت repository یا کد در حالت ناسازگار یا نیمه‌کاره قرار نمی‌گیرد.

### atomic commit:
کامیتی که به طور کامل و در یک مرحله تمامی تغییرات مرتبط را ثبت می‌کند. در صورت بروز خطا در هنگام ثبت کامیت، هیچ‌یک از تغییرات ذخیره نمی‌شود.

### atomic pull-request:
Pull request ای که تمامی تغییرات پیشنهادی را یک‌باره merge می‌کند. یا کل pull request پذیرفته و merge می‌شود یا هیچ‌یک از تغییرات وارد repository نمی‌شود.

این مفهوم باعث می‌شود از یکپارچگی و سازگاری کد در هر لحظه اطمینان حاصل شود.

</div>


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

#  سوال ۷.

<div style="text-align: right">
در سیستم کنترل نسخه گیت، ما با دو نوع Repository سر و کار داریم: Local Repository و Remote Repository.
<div dir="rtl">
**Local Repository** مخزنی است که روی سیستم لوکال ما قرار دارد. وقتی ما با گیت کار می‌کنیم، تغییرات را در Local Repository خود اعمال می‌کنیم. این مخزن شامل تمام فایل‌ها، Commits، Branches و تاریخچه کامل پروژه ما است. ما می‌توانیم به صورت آفلاین با Local Repository کار کنیم، تغییرات را ایجاد کنیم، Commit کنیم و Branch‌های جدید بسازیم. تمامی این عملیات به صورت لوکال انجام می‌شود و تاثیری بر دیگران ندارد.
<div dir="rtl">
از سوی دیگر، **Remote Repository** مخزنی است که روی یک سرور یا سرویس آنلاین مانند GitHub، GitLab یا Bitbucket قرار دارد. این مخزن به ما اجازه می‌دهد تا پروژه خود را با دیگران به اشتراک بگذاریم و به صورت تیمی همکاری کنیم. با استفاده از دستورات گیت مانند `git push` و `git pull`، ما می‌توانیم تغییرات را بین Local Repository و Remote Repository همگام‌سازی کنیم. این ارتباط به ما امکان می‌دهد تا آخرین تغییرات را از دیگران دریافت کنیم یا تغییرات خود را با تیم به اشتراک بگذاریم.

تفاوت اصلی بین این دو نوع مخزن در محل قرارگیری و نقش آن‌ها در فرآیند توسعه است. **Local Repository** برای توسعه و مدیریت لوکال یا محلی کدها استفاده می‌شود، در حالی که **Remote Repository** به عنوان یک مرکز مشترک برای همکاری تیمی و اشتراک‌گذاری کدها عمل می‌کند.

به عنوان مثال، ما می‌توانیم در Local Repository خود تغییراتی را اعمال و آزمایش کنیم، بدون اینکه این تغییرات را فوراً با دیگران به اشتراک بگذاریم. زمانی که مطمئن شدیم تغییرات ما پایدار و آمادهٔ اشتراک‌گذاری هستند، می‌توانیم با `git push` آن‌ها را به Remote Repository ارسال کنیم. همچنین، اگر همکاران ما تغییراتی را در Remote Repository اعمال کرده باشند، می‌توانیم با `git pull` این تغییرات را دریافت کرده و Local Repository خود را به‌روز کنیم.

در نتیجه، **Local Repository** و **Remote Repository** هر دو نقش حیاتی در گردش کار گیت دارند. Local Repository به ما امکان می‌دهد تا به صورت مستقل و آفلاین توسعه دهیم، در حالی که Remote Repository به ما اجازه می‌دهد تا با دیگران همکاری کنیم، تغییرات را به اشتراک بگذاریم و از آخرین به‌روزرسانی‌ها مطلع شویم.

</div>

