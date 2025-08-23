import { lazy } from 'react';
import { isPC } from './platform';

export const loadPlatformComponent = <T = unknown>(
  componentPath: string, 
): React.ComponentType<T> => {
  const platform = isPC ? 'pc' : 'h5';
  const platformComponentPath = componentPath.replace('.tsx', `.${platform}.tsx`);

  const LazyComponent = lazy(async () => {
    try {
      const module = await import(platformComponentPath);
      return { default: module.default };
    } catch (platformError) {
      console.warn(`平台组件加载失败（${platformComponentPath}），尝试加载通用组件`, platformError);
      try {
        // 尝试加载原始路径作为fallback
        const fallbackModule = await import(componentPath);
        return { default: fallbackModule.default };
      } catch (fallbackError) {
        throw new Error(`组件加载失败：${componentPath}，${fallbackError}`);
      }
    }
  });

  return LazyComponent as React.ComponentType<T>;
};
