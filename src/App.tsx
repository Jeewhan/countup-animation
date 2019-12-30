import React, { FC, useRef, useMemo } from "react";
import classnames from "classnames/bind";

import "reset-css";

import { useAnimation } from "./useAnimation";

import styles from "./App.module.scss";

const cx = classnames.bind(styles);

const App: FC = () => {
  const $trigger = useRef<HTMLElement>(null);

  const current = useMemo(() => new Date(), []);

  const { transition, user, review, save } = useAnimation($trigger);

  return (
    <section className={cx("App")} ref={$trigger}>
      <figure
        className={cx("logo-container", "effect-target", "effect-delay-0", {
          effect: transition
        })}
      >
        <img className={cx("logo")} src="/triple@2x.png" alt="trophy" />

        <figcaption className={cx("based-on")}>
          {`${current.getFullYear()}년 ${current.getMonth() + 1}월 기준`}
        </figcaption>
      </figure>

      <div className={cx("content-container")}>
        <ul
          className={cx("metrics", "effect-target", "effect-delay-100", {
            effect: transition
          })}
        >
          <li className={cx("metric")}>
            <strong>{user}만 명</strong>의 사용자
          </li>

          <li className={cx("metric")}>
            <strong>{review}만 개</strong>의 리뷰
          </li>

          <li className={cx("metric")}>
            <strong>{save}만 개</strong>의 저장
          </li>
        </ul>

        <div
          className={cx("stores", "effect-target", "effect-delay-200", {
            effect: transition
          })}
        >
          <figure className={cx("award")}>
            <img
              className={cx("store-image")}
              src="/play-store@2x.png"
              alt="google-store"
            />
            <figcaption className={cx("award-content")}>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </figcaption>
          </figure>

          <figure className={cx("award")}>
            <img
              className={cx("store-image")}
              src="/app-store@2x.png"
              alt="app-store"
            />
            <figcaption className={cx("award-content")}>
              2018 애플 앱스토어
              <br />
              오늘의 여행앱 선정
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default App;
