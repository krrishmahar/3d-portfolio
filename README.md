name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      # ---------- BUN SETUP ----------
      - name: Install Bun
        uses: oven-sh/setup-bun@v1

      # ---------- CACHE: bun + node_modules ----------
      - name: Cache Bun dependencies
        uses: actions/cache@v4
        with:
          path: |
            ~/.bun/install/cache
            node_modules
          key: bun-${{ runner.os }}-${{ hashFiles('bun.lockb') }}
          restore-keys: |
            bun-${{ runner.os }}-

      - name: Install dependencies
        run: bun install

      # ---------- BUILD ----------
      - name: Build Project
        run: bun run build

      # ---------- TEST ----------
      - name: Run Tests
        run: bun test --coverage --reporter json --reporter console

      # ---------- CODECOV UPLOAD ----------
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          slug: ${{ github.repository }}
          fail_ci_if_error: false
