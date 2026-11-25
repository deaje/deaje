---
title: What ten years of Laravel taught me about boring code
description: The clever bits didn't last. The plain ones did. A slow look back at the decisions that aged well.
date: 2026-11-18
kind: code
tags: [laravel, architecture, craft]
placeholder: true
---

> **Placeholder post.** This is sample text to show how a technical article looks on the site. Replace it with a real post (or delete the file) before launch.

Every clever abstraction I shipped in 2017 is gone now. The plain controllers survived. This post is a look back at which decisions aged well, which ones didn't, and why "obvious" has become the highest compliment a pull request can get from me.

## The abstraction that ate a sprint

Early on I wrote a generic "repository" layer for everything. It felt grown-up. In practice it meant every query had two homes, and every new teammate had to learn my rules before they could learn the business.

```php
// What I wrote then
$orders = $this->orderRepository->findByCriteria(new OpenOrdersCriteria($customer));

// What I'd write now
$orders = $customer->orders()->where('status', 'open')->latest()->get();
```

The second version is shorter, but that's not the point. The point is that anyone who knows Laravel can read it **without opening another file**.

## Three things that held up

1. **Database constraints over application checks.** The app forgets; the database doesn't.
2. **Boring names.** `InvoiceMailer` beats `NotificationDispatchOrchestrator` every time.
3. **Small, dull migrations.** One change per migration, always reversible.

---

None of this is new advice. It just took me a few years of 2 a.m. incidents to believe it.
