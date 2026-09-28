declare global {
  interface Window {
    ChannelIO?: IChannelIO;
    ChannelIOInitialized?: boolean;
  }
}

interface IChannelIO {
  c?: (...args: unknown[]) => void;
  q?: [methodName: string, ...args: unknown[]][];
  (...args: unknown[]): void;
}

interface BootOption {
  appearance?: string;
  customLauncherSelector?: string;
  hideChannelButtonOnBoot?: boolean;
  hidePopup?: boolean;
  language?: string;
  memberHash?: string;
  memberId?: string;
  page?: string;
  pluginKey: string;
  profile?: Profile;
  trackDefaultEvent?: boolean;
  trackUtmSource?: boolean;
  unsubscribe?: boolean;
  unsubscribeEmail?: boolean;
  unsubscribeTexting?: boolean;
  zIndex?: number;
}

interface Callback {
  (error: Error | null, user: CallbackUser | null): void;
}

interface CallbackUser {
  alert: number;
  avatarUrl: string;
  id: string;
  language: string;
  memberId: string;
  name?: string;
  profile?: Profile | null;
  tags?: string[] | null;
  unsubscribeEmail: boolean;
  unsubscribeTexting: boolean;
}

interface Profile {
  [key: string]: string | number | boolean | null | undefined;
}

type Appearance = "light" | "dark" | "system" | null;

class ChannelService {
  loadScript() {
    const w = window;
    if (w.ChannelIO) {
      console.error("ChannelIO script included twice.");
      return;
    }

    const ch: IChannelIO = function (...args: unknown[]) {
      ch.c?.(...args);
    };
    ch.q = [];
    ch.c = function (...args: unknown[]) {
      ch.q?.push(args as [string, ...unknown[]]);
    };
    w.ChannelIO = ch;

    const loadPlugin = () => {
      if (w.ChannelIOInitialized) return;
      w.ChannelIOInitialized = true;
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      const x = document.getElementsByTagName("script")[0];
      if (x.parentNode) {
        x.parentNode.insertBefore(s, x);
      }
    };

    if (document.readyState === "complete") {
      loadPlugin();
    } else {
      w.addEventListener("DOMContentLoaded", loadPlugin);
      w.addEventListener("load", loadPlugin);
    }
  }

  boot(option: BootOption, callback?: Callback) {
    window.ChannelIO?.("boot", option, callback);
  }

  shutdown() {
    window.ChannelIO?.("shutdown");
  }

  /**
   * 채팅창을 연다.
   *
   * ChannelTalk 은 사용자의 첫 상호작용에서 부팅한다. 버튼 클릭이 그 첫
   * 상호작용이면 React 핸들러가 window 리스너보다 먼저 돌아 ChannelIO 가
   * 아직 없다. 그래서 부팅될 때까지 잠깐 기다렸다 다시 시도한다.
   */
  showMessenger() {
    if (window.ChannelIO) {
      window.ChannelIO("showMessenger");
      return;
    }

    const started = Date.now();
    const timer = setInterval(() => {
      if (window.ChannelIO) {
        clearInterval(timer);
        window.ChannelIO("showMessenger");
      } else if (Date.now() - started > 5000) {
        clearInterval(timer);
      }
    }, 100);
  }

  showChannelButton() {
    window.ChannelIO?.("showChannelButton");
  }

  hideChannelButton() {
    window.ChannelIO?.("hideChannelButton");
  }

  /**
   * 채널톡이 "현재 페이지" 로 쓸 값을 덮어쓴다.
   * 상담사 화면의 현재 페이지, 이벤트 트래킹, 지원봇·마케팅의 URL 조건 매칭에 쓰인다.
   *
   * 빈 문자열이나 null 을 넘기면 "페이지 정보 없음" 이 되지 기본값으로 돌아가지 않는다.
   * 해제는 resetPage 로 한다.
   */
  setPage(page: string) {
    window.ChannelIO?.("setPage", page);
  }

  /** setPage 로 덮어쓴 값을 해제하고 실제 주소(document.location.href)로 되돌린다 */
  resetPage() {
    window.ChannelIO?.("resetPage");
  }

  setAppearance(appearance: Appearance) {
    window.ChannelIO?.("setAppearance", appearance);
  }
}

const channelService = new ChannelService();
export default channelService;
