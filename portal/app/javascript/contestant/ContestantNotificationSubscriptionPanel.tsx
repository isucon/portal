import type { isuxportal } from "../pb";
import { ApiError, ApiClient } from "../ApiClient";

import React from "react";

import { ErrorMessage } from "../ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;

  serviceWorker: ServiceWorkerRegistration | null;
  localNotificationEnabled: boolean;
  setLocalNotificationEnabled: (flag: boolean) => any;
}

export const ContestantNotificationSubscriptionPanel: React.FC<Props> = (props: Props) => {
  const [sub, setSub] = React.useState<PushSubscription | null | undefined>(undefined);

  if (!('serviceWorker' in navigator)) return <></>;
  if (!('Notification' in window)) return <></>;

  const sw = props.serviceWorker;

  React.useEffect(() => {
    if (!sw) return;
    sw.pushManager.getSubscription().then((s) => setSub(s))
      .catch((e) => console.warn("getSubscription failed:", e));
  }, [sw]);

  if (!sw) return <></>;
  if (sub === undefined) return <></>;

  return <ContestantNotificationSubscriptionPanelInner {...props} serviceWorker={sw} pushSubscription={sub} />;
};

export interface InnerProps extends Props {
  pushSubscription: PushSubscription | null;
}

const ContestantNotificationSubscriptionPanelInner: React.FC<InnerProps> = (props: InnerProps) => {
  const [pushSubscription, setPushSubscription] = React.useState(props.pushSubscription);

  // TODO: if (pushSubscription) {
  if (pushSubscription || props.localNotificationEnabled) {
    const doUnsubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      props.setLocalNotificationEnabled(false);
    };

    return <button className="button is-small" onClick={doUnsubscribe}>
      <span className="material-icons" aria-label={"通知を無効にする"}>notifications_active</span>
    </button>;
  } else {
    const doSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
        const perm = await Notification.requestPermission();
        if (perm === "denied") {
          alert("ブラウザで通知が拒否されているため有効にできません");
          return;
        }
        if (perm === "default") {
          alert("通知が許可されませんでした (有効にできません)");
          return;
        }
        props.setLocalNotificationEnabled(true);
      } catch (e) {
        console.error("requestPermission failure", e);
        alert("requestPermission failure");
      }
    };

    return <button className="button is-small" onClick={doSubscribe}>
      通知を有効にする
      <span className="material-icons" aria-hidden={true}>notifications_none</span>
    </button>
  }
}
