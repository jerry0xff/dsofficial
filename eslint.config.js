import js from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default [
  // 忽略构建产物
  {
    ignores: ["dist", "node_modules"],
  },

  // JS/TS 通用推荐规则
  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      /* =========================
         React / Hooks
      ========================= */
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      /* =========================
         TypeScript
      ========================= */
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      "@typescript-eslint/no-explicit-any": "off",

      /* =========================
         通用风格（官网阶段：宽松）
      ========================= */
      "no-console": "off",
      "no-debugger": "warn",
    },
  },
]
