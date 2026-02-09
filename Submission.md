# Jest Workshop Submission

## Student Details
- Name:Yashraj Chouhan
- Roll Number: 2024-B-13092005
- GitHub Username: Jadu07

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: no coupon case
**What it protects against:** 
It makes sure the price stays the same if no coupon is used, so there are no unexpected discounts or changes when the user did'nt applied one. 

---

### 2. Test Name: save10 coupon
**What it protects against:** 
Checks that the SAVE10 coupon works the right way by applying the correct discounts and limits, making sure none of the rules are missed or calculated wrong. 

---

### 3. Test Name: flat50 boundary case
**What it protects against:**  
Ensures the total never becomes negative when a flat discount is larger than the subtotal. This prevents bugs where users could see a negative payable amount.
---

### 4. Test Name: invalid subtotal which throws error
**What it protects against:**  
Makes sure the function blocks invalid values like negative numbers or NaN, so errors are caught early and don’t lead to wrong totals later.

---

### 5. Test Name: case insensitive coupon
**What it protects against:** 
this makes sure coupon codes work no matter how they’re typed (like save10, SAVE10, or SaVe10), so valid coupons don’t fail because of letter casing. 

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: https://github.com/Jadu07/jest-workshop/actions

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

How unit test's are implemented and tested in github actions. this is what we learnt from this workshop

