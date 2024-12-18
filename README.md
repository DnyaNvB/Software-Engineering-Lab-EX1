# Software-Engineering-Lab EX1
<div dir="rtl">

# سوال ۱.


**پوشه‌ی .git**

پوشه‌ی `.git` در واقع پوشه‌ای است که سیستم کنترل نسخه‌ی گیت از آن برای ذخیره‌ی اطلاعات مربوط به تاریخچه‌ی پروژه استفاده می‌کند. این پوشه شامل تمامی داده‌های مربوط به تغییرات، تاریخچه‌ی کامیت‌ها، شاخه‌ها (branches)، تگ‌ها و دیگر اطلاعات مربوط به پروژه است. به طور کلی، اطلاعات کل پروژه در این پوشه ذخیره می‌شود تا گیت بتواند تغییرات را پیگیری و مدیریت کند.


**اطلاعاتی که در پوشه‌ی `.git` ذخیره می‌شود:**
 
<div dir="rtl">
1. objects: اطلاعات مربوط به کامیت‌ها، درخت‌ها (trees)، و بلاک‌ها (blobs) که شامل فایل‌ها و تغییرات آنها است.
<div dir="rtl">
<div dir="rtl">
2. branches: فایل‌هایی که شاخه‌های مختلف پروژه و آخرین کامیت‌های مربوط به هر شاخه را نشان می‌دهند.
<div dir="rtl">
<div dir="rtl">
3. tags: اطلاعات مربوط به نسخه‌های خاصی از پروژه که با یک تگ مشخص می‌شوند.
<div dir="rtl">
<div dir="rtl">
4. refs: شامل شاخه‌ها و تگ‌های پروژه است که گیت از آنها برای پیگیری مکان فعلی شاخه‌ها استفاده می‌کند.
<div dir="rtl">
<div dir="rtl">
5. config: تنظیمات مرتبط با گیت مخزن یا repository، شامل اطلاعات مربوط به remote‌ها (مانند آدرس‌های URL مخازن) و تنظیمات دیگر.
<div dir="rtl">
<div dir="rtl">
6. staging area: جایی که فایل‌ها برای کامیت بعدی آماده‌سازی می‌شوند.
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
<div dir="rtl">
<div dir="rtl">

### atomic pull-request:
پول‌ریکوئستی که تمامی تغییرات پیشنهادی را یک‌باره merge می‌کند. یا کل pull request پذیرفته و merge می‌شود یا هیچ‌یک از تغییرات وارد repo نمی‌شود.
<div dir="rtl">



---

# سوال ۳
<div dir="rtl">

### تفاوت دستورهای <span dir="rtl">`fetch`</span> و <span dir="rtl">`pull`</span> و <span dir="rtl">`merge`</span> و <span dir="rtl">`rebase`</span> و <span dir="rtl">`cherry-pick`</span>
- **<span dir="rtl">fetch</span>**: این دستور تغییرات ریپازیتوری اصلی (remote) را به صورت محلی دریافت می‌کند، اما این تغییرات را به شاخه فعلی اضافه نمی‌کند. فقط نسخه محلی از تاریخچه ریپازیتوری اصلی را به‌روزرسانی می‌کند.
- **<span dir="rtl">pull</span>**: این دستور شبیه به <span dir="rtl">`fetch`</span> عمل می‌کند با این تفاوت که بعد از دریافت تغییرات، آنها را به صورت خودکار به شاخه فعلی اضافه می‌کند. به عبارت دیگر، <span dir="rtl">`pull`</span> ترکیبی از <span dir="rtl">`fetch`</span> و <span dir="rtl">`merge`</span> است.
- **<span dir="rtl">merge</span>**: این دستور شاخه‌های مختلف را با هم ترکیب می‌کند و تغییرات دو شاخه را در شاخه فعلی ادغام می‌کند. در نتیجه، یک کامیت جدید ایجاد می‌شود که شامل هر دو مجموعه تغییرات است.
- **<span dir="rtl">rebase</span>**: <span dir="rtl">`rebase`</span> برای قرار دادن تغییرات یک شاخه روی شاخه دیگر بدون ایجاد کامیت‌های ادغام استفاده می‌شود. این دستور تاریخچه ریپازیتوری را مرتب می‌کند و در نتیجه تاریخچه تمیزتری ایجاد می‌شود. اما می‌تواند باعث بروز مشکلات در صورت وجود کامیت‌های مشترک در شاخه‌ها شود.
- **<span dir="rtl">cherry-pick</span>**: این دستور یک یا چند کامیت خاص را از یک شاخه به شاخه فعلی منتقل می‌کند. این دستور زمانی کاربرد دارد که فقط به یک سری تغییرات خاص نیاز دارید و نمی‌خواهید کل شاخه را مرج کنید.

</div>


---

# سوال ۴

<div dir="rtl">

### تفاوت دستورهای <span dir="rtl">`reset`</span> و <span dir="rtl">`revert`</span> و <span dir="rtl">`restore`</span> و <span dir="rtl">`switch`</span> و <span dir="rtl">`checkout`</span>
- **<span dir="rtl">reset</span>**: این دستور برای برگرداندن شاخه به حالت یک کامیت خاص استفاده می‌شود. <span dir="rtl">`reset`</span> تغییرات را به طور کامل حذف می‌کند و سه نوع دارد: <span dir="rtl">`--soft`</span>، <span dir="rtl">`--mixed`</span> و <span dir="rtl">`--hard`</span> که هر کدام میزان متفاوتی از تغییرات را حذف می‌کنند.
- **<span dir="rtl">revert</span>**: این دستور یک کامیت جدید ایجاد می‌کند که تغییرات کامیت قبلی را برعکس می‌کند. بنابراین به تاریخچه مخزن صدمه‌ای نمی‌زند و به جای حذف، تغییرات را معکوس می‌کند.
- **<span dir="rtl">restore</span>**: <span dir="rtl">`restore`</span> برای برگرداندن فایل‌ها یا دایرکتوری‌ها به وضعیت قبلی یا تغییرات خاص استفاده می‌شود. این دستور معمولا در کارهای تک فایل و برای بازگرداندن تغییرات فایل‌ها از حالت استیج یا از نسخه‌ی خاصی کاربرد دارد.
- **<span dir="rtl">switch</span>**: این دستور برای تغییر شاخه‌ها استفاده می‌شود و جایگزین ساده‌تری برای <span dir="rtl">`checkout`</span> است که مخصوصا برای تغییر شاخه طراحی شده است.
- **<span dir="rtl">checkout</span>**: این دستور برای تغییر شاخه‌ها، تغییر وضعیت فایل‌ها و بازگرداندن آنها به حالت خاصی استفاده می‌شود. <span dir="rtl">`checkout`</span> می‌تواند یک شاخه جدید ایجاد کند، شاخه فعلی را تغییر دهد یا وضعیت فایل خاصی را بازنشانی کند.

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
Local Repository مخزنی است که روی سیستم لوکال ما قرار دارد. وقتی ما با گیت کار می‌کنیم، تغییرات را در Local Repository خود اعمال می‌کنیم. این مخزن شامل تمام فایل‌ها، Commits، Branches و تاریخچه کامل پروژه ما است. ما می‌توانیم به صورت آفلاین با Local Repository کار کنیم، تغییرات را ایجاد کنیم، Commit کنیم و Branch‌های جدید بسازیم. تمامی این عملیات به صورت لوکال انجام می‌شود و تاثیری بر دیگران ندارد.
<div dir="rtl">
از سوی دیگر، Remote Repository مخزنی است که روی یک سرور یا سرویس آنلاین مانند GitHub، GitLab یا Bitbucket قرار دارد. این مخزن به ما اجازه می‌دهد تا پروژه خود را با دیگران به اشتراک بگذاریم و به صورت تیمی همکاری کنیم. با استفاده از دستورات گیت مانند `git push` و `git pull`، ما می‌توانیم تغییرات را بین Local Repository و Remote Repository همگام‌سازی کنیم. این ارتباط به ما امکان می‌دهد تا آخرین تغییرات را از دیگران دریافت کنیم یا تغییرات خود را با تیم به اشتراک بگذاریم.

تفاوت اصلی بین این دو نوع مخزن در محل قرارگیری و نقش آن‌ها در فرآیند توسعه است. **Local Repository** برای توسعه و مدیریت لوکال یا محلی کدها استفاده می‌شود، در حالی که **Remote Repository** به عنوان یک مرکز مشترک برای همکاری تیمی و اشتراک‌گذاری کدها عمل می‌کند.

به عنوان مثال، ما می‌توانیم در Local Repository خود تغییراتی را اعمال و آزمایش کنیم، بدون اینکه این تغییرات را فوراً با دیگران به اشتراک بگذاریم. زمانی که مطمئن شدیم تغییرات ما پایدار و آمادهٔ اشتراک‌گذاری هستند، می‌توانیم با `git push` آن‌ها را به Remote Repository ارسال کنیم. همچنین، اگر همکاران ما تغییراتی را در Remote Repository اعمال کرده باشند، می‌توانیم با `git pull` این تغییرات را دریافت کرده و Local Repository خود را به‌روز کنیم.

در نتیجه، **Local Repository** و **Remote Repository** هر دو نقش حیاتی در گردش کار گیت دارند. Local Repository به ما امکان می‌دهد تا به صورت مستقل و آفلاین توسعه دهیم، در حالی که Remote Repository به ما اجازه می‌دهد تا با دیگران همکاری کنیم، تغییرات را به اشتراک بگذاریم و از آخرین به‌روزرسانی‌ها مطلع شویم.




<div dir="rtl">


# گزارش:

## مقدمه

در این پروژه، GitHub به‌عنوان مخزن مرکزی برای ذخیره‌سازی و مدیریت کدها انتخاب شد تا تیم بتواند به‌صورت هم‌زمان و هماهنگ روی پروژه کار کند. هدف پروژه، ساخت یک ماشین حساب ساده با  framework ReactJS بود که به تیم اجازه می‌داد اصول کار با Git و مفاهیم مدیریت نسخه‌ها را به‌طور عملی تجربه کند.

برای بهینه‌سازی مخزن کد و جلوگیری از ذخیره‌سازی فایل‌های غیرضروری و حجیم، یک فایل `.gitignore` تنظیم کردیم. این فایل شامل `node_modules/` به‌منظور حذف بسته‌های javascript و `.DS_Store` که توسط سیستم‌عامل مک ایجاد می‌شود، بود. این تصمیم به ما کمک کرد تا حجم مخزن کد کاهش یابد و روند توسعه سریع‌تر و کارآمدتر باشد.

ساختاردهی شاخه‌ها بخش مهمی از این پروژه بود. برای این منظور، شاخه‌های معنادار `dev` برای توسعه کلی، `feature` برای افزودن ویژگی‌های جدید، و `hotfix` برای رفع باگ‌ها و مشکلات فوری ایجاد شدند. این شاخه‌ها باعث شدند اعضای تیم به‌راحتی بتوانند وظایف را شناسایی و پیگیری کنند. سعی شده است هر کامیت به‌دقت و معنادار مستندسازی شود تا مشخص کند چه تغییری در کد رخ داده و هدف از آن چه بوده است. این کار باعث شد که فرآیند بازبینی و درک تغییرات برای تیم آسان‌تر شود.

در نهایت، با استفاده از قابلیت‌های `GitHub Actions`، فرآیند تست خودکار را تنظیم کردیم. این ابزار به‌طور خودکار هر تغییر را آزمایش و بررسی می‌کند تا قبل از merge با شاخه `main`، اطمینان حاصل شود که همه تغییرات از استانداردهای لازم برخوردار هستند و شاخه اصلی پروژه همیشه پایدار و آماده انتشار باقی بماند.

## پیاده‌سازی

همان‌طور که در روال انجام آزمایش گفته شده است، ما برای پیاده‌سازی این پروژه از حداقل ۲۰ commit معنادار استفاده کرده‌ایم که در repository قابل مشاهده است. همچنین از branchهای زیر استفاده کرده‌ایم:
- **شاخه‌ی `DnyaNvB/Software-Engineering-Lab-EX1/tree/feature`:** پیاده‌سازی logic ماشین حساب، از جمله انواع عملیات‌های حسابی و فیچرهای مورد نیاز برای عملکرد منطقی ماشین حساب.
- **شاخه‌ی `DnyaNvB/Software-Engineering-Lab-EX1/tree/report`:** نوشتن گزارش آزمایش و پاسخ دادن به سوالات موجود در دستور کار.
- **شاخه‌ی `DnyaNvB/Software-Engineering-Lab-EX1/tree/dev`:** توسعه ساختار اولیه ماشین حساب و اعمال تغییرات لازم در راستای توسعه کد.
- **شاخه‌ی `DnyaNvB/Software-Engineering-Lab-EX1/tree/hotfix`:** برطرف کردن سریع کانفلیکت‌های مهم و باگ‌های کوچک.

<div dir="rtl">

## کانفلیکت:
1- کانفلیکت زمانی ایجاد شد که دو عضو تیم به‌طور همزمان تغییراتی در بخش‌های یکسانی از کد در دو شاخه‌ی مختلف اعمال کردند. یکی از اعضای تیم در شاخه‌ی `dev` تابع `calculateResult` در فایل `app.js` را بهبود داده و تغییرات خود را **push** کرده بود. هم‌زمان، عضو دیگری از تیم نیز در همان فایل `app.js` و در خطوط مشابه اما در یک شاخه‌ی دیگر تغییراتی ایجاد کرده بود.زمانی که تلاش کردند این دو شاخه را با هم **merge** کنند، به دلیل اینکه تغییرات در یک فایل و در خطوط یکسان انجام شده بود، گیت قادر به تصمیم‌گیری خودکار نبود که کدام تغییر را بپذیرد. به همین دلیل، یک **merge conflict** به وجود آمد.
**رفع کانفلیکت**
برای رفع این مشکل، ما تصمیم گرفتیم که کانفلیکت را به شاخه‌ی `hotfix` منتقل کنیم:
1. ابتدا به شاخه‌ی `hotfix` سوییچ کردیم.
2. سپس تغییرات شاخه‌ی `dev` را با آن merge کردیم. 
3. در این فرآیند، کانفلیکت‌ها شناسایی شده و به‌صورت دستی در شاخه‌ی `hotfix` حل شدند. 
4. پس از برطرف کردن کانفلیکت‌ها و ترکیب صحیح تغییرات، تغییرات  **push** شدند.
این روند باعث شد تا هر دو تغییرات در نهایت به‌درستی در پروژه merge شده و کانفلیکت‌ها به‌صورت موفقیت‌آمیز حل شوند.
2- در سری دوم، کانفلیکت دوباره در فایل `app.js` به وجود آمد. این بار هر دو عضو تیم هم‌زمان روی یک فایل کار می‌کردند، اما تغییرات در بخش‌های مختلف تابع رخ داده بود.
در یک شاخه، دکمه‌ی `Undo` را به `Row` تغییر دادیم و این تغییرات را **push** کردیم. هم‌زمان،  در شاخه‌ی دیگری، دکمه‌ی `C` را به `AC` تغییر دادیم و سپس تلاش کردیم این تغییرات را **merge** و **push** کنیم. وقتی میخواستیم تغییرات خود را به مخزن اصلی **push** کنیم، گیت متوجه شد که تغییرات در همان فایل (`app.js`) ولی در بخش‌های مختلف صورت گرفته است، و به دلیل هم‌زمانی تغییرات، یک **merge conflict** رخ داد.

**رفع کانفلیکت**
از آنجایی که کانفلیکت خیلی پیچیده یا حیاتی نبود، به‌راحتی در همان شاخه تغییرات برطرف شد: در فایل `app.js`خطوطی که کانفلیکت داشتند با استفاده از نشانگر‌های `<<<<<<<` و `=======` و `>>>>>>>` مشخص شدند.  به‌صورت دستی تغییرات لازم را اعمال کردیم، به‌گونه‌ای که هم تغییرات اول (تبدیل `Undo` به `Row`) و هم تغییرات دیگر (تبدیل `C` به `AC`) در فایل باقی بمانند.  بعد از رفع کانفلیکت، فایل را **add** و سپس کامیت و پوش کردیم:

## مستقرسازی:

برای مستقرسازی پروژه، ابتدا با استفاده از دستور `gh-pages` برنامه را در GitHub Pages بارگذاری کردیم تا امکان دسترسی آنلاین به پروژه فراهم شود. برای راه‌اندازی فرایند استقرار مداوم (CD)، از GitHub Actions استفاده شد. فایل تنظیمات مربوط به آن در مسیر `.github/workflows/deployment.yml` قرار دارد.

در این فایل، تنظیماتی قرار داده شده است که به ازای هر `push` به مخزن، GitHub Actions به‌طور خودکار اجرا شده و فرآیند استقرار (deploy) به GitHub Pages آغاز می‌شود. این عملیات اتوماتیک تضمین می‌کند که آخرین تغییرات به‌طور مستقیم در نسخه‌ی آنلاین پروژه اعمال شده و پروژه همواره به‌روز باشد

## تقسیم وظایف:
  همچنین در لینک زیر تقسیم وظایف به همراه وظایف دیده می‌شوند که به مرحله‌ی انجام شده برده شده‌اند.
kanban board link = https://github.com/users/DnyaNvB/projects/1/views/1.

</div>
