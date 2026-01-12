# Frontend API Requirements

## 1) 热门股票（20 支）

返回 20 支热门股票，用于 ticker/市场列表。

### Endpoint

- `GET /api/markets/hot`

### Response

```json
{
  "items": [
    {
      "symbol": "AAPL",
      "price": 192.45,
      "name": "Apple Inc.",
      "name_cn": "苹果公司",
      "change_pct": 0.84,
      "last_10_closes": [191.2, 191.9, 192.1, 191.5, 192.0, 192.3, 192.4, 192.6, 192.5, 192.45]
    }
  ]
}
```

---

## 2) 指数（标普 500 / NASDAQ 100 / 上证指数 / 日经指数）

返回 4 个指数的数值和涨跌幅。

### Endpoint

- `GET /api/markets/indices`

### Response

```json
{
  "items": [
    {
      "symbol": "SPX",
      "value": 4871.5,
      "change_pct": 0.42
    },
    {
      "symbol": "NDX",
      "value": 17140.12,
      "change_pct": -0.18
    },
    {
      "symbol": "SSE",
      "value": 2890.33,
      "change_pct": 0.27
    },
    {
      "symbol": "N225",
      "value": 36420.55,
      "change_pct": -0.11
    }
  ]
}
```

---

## 3) 涨幅最大（5 支）

返回 5 支涨幅最大的股票。

### Endpoint

- `GET /api/markets/top-gainers`

### Response

```json
{
  "items": [
    {
      "symbol": "TSLA",
      "price": 248.14,
      "name": "Tesla, Inc.",
      "name_cn": "特斯拉",
      "change_pct": 3.21,
      "last_10_closes": [240.1, 242.4, 244.2, 245.0, 246.3, 247.2, 247.8, 248.0, 248.2, 248.14]
    }
  ]
}
```

---

## 4) 新上市（5 支）

返回 5 支最新上市的股票。

### Endpoint

- `GET /api/markets/new-listings`

### Response

```json
{
  "items": [
    {
      "symbol": "ABCD",
      "price": 12.34,
      "name": "Example Corp.",
      "name_cn": "示例公司",
      "change_pct": -0.45,
      "last_10_closes": [12.2, 12.1, 12.3, 12.4, 12.35, 12.5, 12.45, 12.4, 12.38, 12.34]
    }
  ]
}
```

---

## Notes

- `price` is a number.
- `change_pct` is a numeric percentage (e.g., `0.84` for +0.84%).
- `last_10_closes` are ordered from oldest to newest.
