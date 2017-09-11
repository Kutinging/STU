# STU 自動搶課腳本 STU AutoElective

### 1.使用方法


1-1.在瀏覽器上安裝油猴子 http://tampermonkey.net/ 請依照個人使用的瀏覽器安裝

1-2.開啟獨立的選課網頁(如圖)  


※如何開啟:登入校務資訊系統後找到<strong>加退選</strong>並點 滑鼠右鍵 <strong>在新分頁中開啟連結</strong>
![image](https://github.com/Kutinging/STU/raw/master/imgs/AutoElective.png)

1-3.安裝腳本到油猴子中！https://github.com/Kutinging/STU/raw/master/%E8%87%AA%E5%8B%95%E9%81%B8%E8%AA%B2%E8%85%B3%E6%9C%AC/STUAutoElective.user.js

1-4.接者找到你要選的課程，並開始數 "由上而下 由1開始是第幾行" 並在腳本內的 STU() 的括號中輸入數字，假如是第一行(表格中的第一行課)就改為 STU(1)，並將腳本中的 @match 後方的網址自行修改 預設是在 AS生活通識選修，此為保護機制避免不小心點到其他類別導致選到其他課程！

### 警告！

## 請不要將 sleep 的時間設定過短，sleep 的單位是 "<strong>毫秒</strong>" 所以 1000 毫秒等同於 1 秒，如果設定過低造成任何對學校或對個人的影響本人一概不負責！！！！！！我有提醒過囉！！！！