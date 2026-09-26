# Caching Deep Dive Report

## 1. Default Fetch

For the first example, I used fetch without adding any cache option.

```ts
fetch("http://localhost:3000/api/products");