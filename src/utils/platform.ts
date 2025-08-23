class DeviceJudge {
    judgeResult: {
        isPC: boolean;
        deviceType: string;
    };
    throttleTimer: NodeJS.Timeout | null;
    throttleDelay: number;
    
    constructor() {
      // 最终判定结果，只保留isPC字段
      this.judgeResult = {
        isPC: false,    // 是否为PC设备
        deviceType: ""  // 细分类型："pc" / "mobile"（手机） / "tablet"（平板）
      };
      // 节流计时器
      this.throttleTimer = null;
      // 节流间隔时间(ms)，可根据需求调整
      this.throttleDelay = 300;
      // 初始化判定
      this.init();
    }
  
    // 初始化：执行所有判定逻辑
    init() {
      const ua = navigator.userAgent.toLowerCase(); // 统一转为小写，避免大小写问题
      const screenWidth = window.innerWidth || screen.width; // 可视宽度/物理宽度（兼容不同浏览器）
      const isSupportTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0; // 触摸能力
  
      // 步骤1：先通过UA匹配核心设备关键字
      const isMobileUA = /(iphone|android|windows phone|blackberry|bb10|symbian)/i.test(ua);
      const isTabletUA = /(ipad|android(?!.*mobile))/i.test(ua); // 安卓平板（排除带"mobile"的手机UA）
      const isPCUA = /(windows nt|mac os x|linux)/i.test(ua) && !isMobileUA && !isTabletUA; // PC系统且非移动/平板
  
      // 步骤2：结合屏幕尺寸辅助验证
      const isMobileScreen = screenWidth <= 768; // 手机屏幕通常≤768px
      const isTabletScreen = screenWidth > 768 && screenWidth <= 1280; // 平板屏幕768-1280px
      const isPCScreen = screenWidth > 1280; // PC屏幕通常>1280px
  
      // 步骤3：结合触摸能力补充（排除"触摸屏PC"误判）
      const isRealTouchDevice = isSupportTouch && (isMobileUA || isTabletUA);
  
      // 步骤4：最终综合判定
      if (isPCUA && (isPCScreen || !isRealTouchDevice)) {
        // PC判定
        this.judgeResult.isPC = true;
        this.judgeResult.deviceType = "pc";
      } else if ((isMobileUA && isMobileScreen) || (isTabletUA && isTabletScreen)) {
        // 移动设备判定
        this.judgeResult.isPC = false;
        this.judgeResult.deviceType = isTabletUA ? "tablet" : "mobile";
      } else {
        // 极端场景降级
        this.judgeResult.isPC = isPCScreen;
        this.judgeResult.deviceType = isPCScreen ? "pc" : "mobile";
      }
  
      // 缓存结果到localStorage
      localStorage.setItem("deviceJudgeResult", JSON.stringify(this.judgeResult));
    }
  
    // 获取最终判定结果
    getResult() {
      // 优先读取缓存，无缓存则重新判定
      const cachedResult = localStorage.getItem("deviceJudgeResult");
      if (cachedResult) {
        return JSON.parse(cachedResult);
      }
      this.init();
      return this.judgeResult;
    }
  
    // 节流函数：限制函数在指定时间内只能执行一次
    throttle(func: () => void, delay: number) {
      return (...args: unknown[]) => {
        if (!this.throttleTimer) {
          this.throttleTimer = setTimeout(() => {
            func.apply(this, args as []);
            this.throttleTimer = null;
          }, delay);
        }
      };
    }
  
    // 监听屏幕尺寸变化，实时更新判定
    watchScreenChange() {
      // 使用节流处理resize事件
      const throttledResize = this.throttle(() => {
        this.init(); // 尺寸变化时重新判定
        console.log("设备判定更新：", this.judgeResult);
        // 可添加自定义事件触发
        // window.dispatchEvent(new CustomEvent("deviceChange", { detail: this.judgeResult }));
      }, this.throttleDelay);
  
      window.addEventListener("resize", throttledResize);
      
      // 返回移除事件监听的方法
      return () => {
        window.removeEventListener("resize", throttledResize);
        if (this.throttleTimer) {
          clearTimeout(this.throttleTimer);
          this.throttleTimer = null;
        }
      };
    }
  }
  
  // 实例化并使用
  const deviceJudge = new DeviceJudge();
  const { isPC } = deviceJudge.getResult();
  
  export { isPC, deviceJudge };
  