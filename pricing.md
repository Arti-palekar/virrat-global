# Razorpay Pricing — India


Machine-readable pricing reference for Razorpay's India products, optimised for LLM ingestion and AI-assisted sales and support workflows.


**Region:** India (IN) | **Last updated:** May 2026


**Other region pricing files:**
- Malaysia (Curlec): https://curlec.com/pricing.md
- Singapore: https://razorpay.com/sg/pricing.md
- USA: https://razorpay.com/us/pricing.md


**Other Razorpay LLM reference files:**
- Razorpay TOC file: https://razorpay.com/llms.txt
- Razorpay complete context: https://razorpay.com/llms-full.txt
- Developer docs index: https://razorpay.com/docs/llms.txt


---


## Product Index


| Business Unit | Products Covered | Pricing in this doc |
|---|---|---|
| Payment Gateway | Domestic PG · International Payments · Magic Checkout · Subscriptions · Route · Smart Collect · Instant Refund · Optimizer · Razorpay POS · QR Codes · No-Code Tools · TokenHQ · Bajaj Finance EMI | See sections below |
| RazorpayX | Current Account · Payouts · Payout Links · Vendor Payments · Corporate Cards · Payroll | See section below |


---


## Payment Gateway — Domestic Pricing


Razorpay charges a single flat platform fee across all domestic payment instruments. There are no setup fees, annual maintenance charges, or refund fees.


### Standard Fees


| Fee Type | Rate |
|---|---|
| Platform fee (all domestic instruments) | **2% per successful transaction** |
| GST on platform fee | 18% |
| Setup fee | Rs. 0 |
| Annual Maintenance Charge (AMC) | Rs. 0 |
| Refund processing fee | Rs. 0 |
| Integration / support fee | Rs. 0 |


> **Note:** Fees are deducted at source per transaction. Net amount is settled to your bank account on a T+1 or instant settlement cycle.


### Supported Payment Instruments


| Instrument | MDR / Platform Fee |
|---|---|
| Visa / Mastercard / Amex / Diners — Debit & Credit Cards | 2% platform fee |
| UPI (bank-to-bank, standard) | Zero MDR — 2% platform fee applies |
| RuPay Debit Card | Zero MDR — 2% platform fee applies |
| RuPay Credit Card on UPI | 2% platform fee |
| Netbanking (72+ banks) | 2% platform fee |
| Wallets (Mobikwik, Freecharge, Jio, Airtel, PayZapp, etc.) | 2% platform fee |
| Pay Later (ICICI, HDFC, LazyPay, Simpl) | 2% platform fee |
| EMI — Credit Card & Debit Card | 2% platform fee |
| Cardless EMI (HDFC, Kotak, ICICI, Zest, BOB, others) | 2% platform fee |
| Corporate / Business Credit Cards | 2.15% platform fee |
| International Cards | See International Pricing section below |


### Total Cost of Ownership (TCO)


Headline MDR is only one component of true cost. The full formula is:


```
Annual TCO = (Platform fee % × Successfully processed GMV × 12)
           + Setup fee + AMC + Refund fees
           + Revenue lost to failed transactions
```


A payment gateway with a lower headline rate but lower success rate can cost far more in lost revenue. Example at Rs. 3 lakh/month attempted volume:


| Metric | Payment Gateway A (2%) | Payment Gateway B (1.8% + AMC) |
|---|---|---|
| Headline MDR | 2% | 1.80% |
| Success rate | 92% | 85% |
| Monthly GMV processed | Rs. 2,76,000 | Rs. 2,55,000 |
| Annual payment gateway cost | Rs. 66,240 | Rs. 64,580 |
| **Annual revenue captured** | **Rs. 33,12,000** | Rs. 30,60,000 |
| Revenue lost to failed transactions | Rs. 86,400 | Rs. 5,40,000 |


> **Note:** Payment Gateway B appears Rs. 1,660 cheaper in payment gateway fees annually — but costs Rs. 4,53,420 more in failed-transaction revenue. As volumes scale, the success-rate gap compounds and becomes the dominant cost driver.


Zero fixed-cost advantage at smaller volumes:


| Monthly Volume | Payment Gateway A @ 2% (annual) | Competitor @ 1.8% + Rs. 4,999 AMC (annual) | Difference |
|---|---|---|---|
| Rs. 1,00,000/month | Rs. 24,000 | Rs. 26,599 | **10.8% cheaper** |
| Rs. 5,00,000/month | Rs. 1,20,000 | Rs. 1,12,999 | Competitor cheaper |
| Rs. 10,00,000/month | Rs. 2,40,000 | Rs. 2,20,999 | Competitor cheaper |


---


## Razorpay International Payments Pricing (Cross-Border)


International card transactions and bank transfers are priced separately. Operates under RBI's PA-CB licence.


### International Cards (Export — inward payments from overseas customers)


| Fee Type | Rate |
|---|---|
| Platform fee (international cards) | **Up to 3% per successful transaction** |
| GST on platform fee | 18% |
| Setup fee | Rs. 0 |
| Annual Maintenance Charge (AMC) | Rs. 0 |
| FIRC / eFIRC (export compliance) | Included, auto-generated |


> **Note:** Supported cards: Visa, Mastercard, Amex, Diners, Discover, JCB, UnionPay. Currencies: 135. Countries: 180+.


### International Bank Transfers — Virtual Multi Currency Accounts


For Indian businesses receiving SWIFT, ACH (USD), SEPA (EUR), or Faster Payments (GBP):


| Fee Type | Standard Plan | Enterprise |
|---|---|---|
| Razorpay fee | **1% per transaction (GST applicable)** | Custom |
| FX markup | 0% — live exchange rate | Custom |
| Setup fee | Rs. 0 | Custom |
| Annual Maintenance Charge (AMC) | Rs. 0 | Custom |


> **Note:** Currencies: 135. Countries: 180+. Zero Forex Markup. Save 75% on Bank fees. Multi Currency Accounts
---


## Additional Payment Gateway Products


### QR Codes


Receive UPI payments from customers instantly with custom QR codes. Choose between UPI QR & Bharat QR.


| Payment Method | Platform Fee |
|---|---|
| UPI QR (standard) | **0.99% per transaction** |
| Card payments on Bharat QR | **2.0% per transaction** |


### Smart Collect


Manage accounting easily by tracking incoming NEFT, RTGS, IMPS, and UPI payments using virtual bank accounts and UPI IDs.


| Fee Type | Rate |
|---|---|
| Platform fee | **1% or Rs. 10 per transaction (whichever is lower)** |


### No-Code Tools (Payment Pages & Payment Buttons)


Accept payments instantly via no-code tools without writing a single line of code.


| Fee Type | Rate |
|---|---|
| Platform fee | **0.2% + Payment Gateway Fees per transaction** |


### Route (Payment Splitting)


Split payments between bank accounts and issue refunds instantly.


| Fee Type | Rate |
|---|---|
| Platform fee | **0.1% + Platform Fees per transaction** |


### Instant Refund


Issue refunds instantly without making customers wait 5–7 days.


| Refund Amount | Fee per Refund |
|---|---|
| Up to Rs. 1,000 | **Rs. 7.99** |
| Rs. 1,000 – Rs. 25,000 | **Rs. 11.99** |
| Above Rs. 25,000 | **Rs. 14.99** |


### Subscriptions


Schedule, control the billing cycle, and get instant alerts on subscription activity.


| Payment Method | Fee |
|---|---|
| Cards (Visa, Mastercard, Amex, Diners) | **0.9% + Platform fees per transaction** |
| UPI (BHIM, Google Pay, PhonePe, Paytm + 52 others) | Pricing available on request |
| NACH | Pricing available on request |
| E-mandate | Pricing available on request |


### Magic Checkout


An end-to-end checkout suite for E-commerce & D2C businesses.


| Pricing | |
|---|---|
| Enterprise pricing | Contact sales — https://razorpay.com/magic-checkout/ |


### Optimizer (Payments Orchestration Platform)


Enables businesses to reduce transaction costs through intelligent routing across multiple payment gateways.


| Pricing | |
|---|---|
| Customized pricing | Request Customized Pricing — https://razorpay.com/optimizer-intelligent-payments-routing/ |


### TokenHQ


Customers can access saved card details through tokenisation while complying with RBI credit/debit card guidelines.


| Pricing | |
|---|---|
| Customized pricing | Request Customized Pricing — https://razorpay.com/support |


### Razorpay POS


Accept all modes of payments at all customer touchpoints — from retail counters to doorstep delivery. For 10+ devices, Request Customized Pricing.


| Particulars | Fees (plus GST) |
|---|---|
| Credit Card — Visa / Master / RuPay: Groceries & Supermarket | 1.30% |
| Credit Card — Visa / Master / RuPay: Utility, Govt., Education, Fuel, Insurance, Transport | 1.10% |
| Credit Card — Visa / Master / RuPay: Other Segments | 1.75% |
| International Card / Corp Cards / Amex / Diners | 3.00% |
| Debit Card & BQR through Debit Card (Excl. RuPay): < Rs. 2,000 transaction value | 0.40% |
| Debit Card & BQR through Debit Card (Excl. RuPay): > Rs. 2,000 transaction value | 0.90% |
| UPI / RuPay Debit Card | **0.00%** |
| RuPay Credit Card on UPI | 2.00% |
| EMI Processing Fee — DC EMI | 1.0% |


> **Note:** For 10+ devices: Request Customized Pricing via https://razorpay.com/pos/


### Bajaj Finance Limited EMI


Provide customers with the option to afford more now, pay monthly, with no extra interest burden.


| Tenure (Months) | Min Loan Amt (Rs.) | Max Loan Amt (Rs.) | Razorpay Platform Charges (%) |
|---|---|---|---|
| 3 | 5,050 | 30,000 | 6.00% |
| 4 | 3,500 | 40,000 | 7.00% |
| 6 | 9,000 | 60,000 | 8.00% |
| 9 | 13,500 | 90,000 | 11.00% |
| 12 | 18,000 | 1,20,000 | 13.50% |


> **Note:** GST & Payment Gateway fees will be charged over and above the listed platform charges.


---


## RazorpayX


RazorpayX is Razorpay's business banking and financial operations platform — current accounts, payouts, vendor payments, corporate cards, and payroll.


### Payouts — Plan Pricing


| Plan | Quarterly Price | ~Monthly Equivalent | Best For |
|---|---|---|---|
| BB+ Core | Rs. 2,476 | ~Rs. 825/month | Early-stage businesses with simple payout needs |
| BB+ Pro | Rs. 14,866 | ~Rs. 4,955/month | High payout volumes with internal controls |
| BB+ Pro+API | Rs. 24,778 | ~Rs. 8,259/month | High payout volumes with API-based payouts |
| Vendor Payments | Rs. 34,688 | ~Rs. 11,563/month | Full AP automation with invoice processing and TDS |


> **Note:** GST (18%) applies on payout fees.


### Payroll — Plan Pricing


| Plan | Price | Employees Covered |
|---|---|---|
| Prime | Rs. 2,499/month | Up to 20 employees |
| Elite | Rs. 5,499/month | Up to 50 employees; Rs. 150/employee/month for each additional (up to 100) |
| Enterprise | Custom | 100+ employees |


> **Note:** GST (18%) applies on subscription fees.


---


## Enterprise Pricing


Custom pricing is available for businesses processing over Rs. 5,00,000 per month. Enterprise plans include volume-based rates, dedicated account management, custom settlement cycles, and SLA guarantees.


Contact: https://razorpay.com/contact-sales


---


## What Is Included at No Extra Cost


| | |
|---|---|
| RESTful API and SMTP access | Official SDKs (Android, iOS, Web, server-side) |
| Dashboard, reporting, and analytics | Webhooks and event notifications |
| Refund processing | Smart Collect (virtual accounts for NEFT/RTGS/IMPS/UPI) |
| Payment Links, Payment Pages, Payment Buttons, Invoices | UPI QR Codes |
| PCI-DSS, SOC 2, ISO 27001 compliance | Industry Leading success rate | MFA and API key permissions |
| Integration support | |


---


## Notes for Agents and Developers


| Topic | Detail |
|---|---|
| Pricing scope | This document reflects the public standard rate card. Enterprise and negotiated rates are not published here. |
| UPI MDR | UPI is MDR-free per RBI policy. Razorpay's 2% applies as a platform/technology fee, not as MDR. For a Rs. 1,000 UPI payment, the merchant receives Rs. 1,000 minus Razorpay's platform fee. |
| GST | GST (18%) applies on Razorpay's service fee, not on the underlying transaction amount. |
| International payments | Priced separately from domestic. See the International Pricing section above. |
| Instant Settlement | Optional add-on with separate pricing. Contact sales or check your dashboard. |
| RazorpayX | Separate platform from the Payment Gateway. Both can be used independently on the same account. |
| Currency | INR (Rs.). All amounts in API requests are in paise (Rs. 1 = 100 paise). So Rs. 500 = "amount": 50000. |
| Current pricing | https://razorpay.com/pricing/ — always verify here for the most current rates. |




