/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PLATFORM: 'pc' | 'h5'
    // 其他环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  