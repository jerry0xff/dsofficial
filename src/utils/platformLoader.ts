/**
 * 根据当前平台（PC/H5）动态加载对应的组件
 * @param componentName 组件名称（不含平台后缀和扩展名）
 * @returns 对应平台的组件
 */
export const loadPlatformComponent = async <T = unknown>(componentName: string) => {
    const platform = import.meta.env.VITE_PLATFORM;
    
    try {
      const componentModule = await import(`../components/${componentName}.${platform}.tsx`);
      return componentModule.default as T;
    } catch (error) {
      console.error(`Failed to load ${platform} component: ${componentName}`, error);
      try {
        const fallbackModule = await import(`../components/${componentName}.tsx`);
        return fallbackModule.default as T;
      } catch (fallbackError) {
        console.error(`Failed to load fallback component: ${componentName}`, fallbackError);
        throw new Error(`Component ${componentName} not found for platform ${platform}`);
      }
    }
  };
  