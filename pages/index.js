// Next.jsのトップページ
// publicフォルダにあるHTMLファイルへのリンクを表示するページ
// AMANEのデザインを参考にしたスタイルを適用

import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ヘッダーセクション */}
      <header className={styles.header}>
        <h1 className={styles.title}>Summary LP</h1>
      </header>

      {/* コンテンツグリッド */}
      <div className={styles.cardGrid}>
        {/* 三菱重工①セクション */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>三菱重工①</h2>
          <p className={styles.cardDescription}>
            デジタコ・ドラレコ競合調査レポート
          </p>
          <div className={styles.buttonGroup}>
            <a 
              href="/三菱重工①/ドライブレコーダー・デジタコ企業比較調査.html"
              className={styles.button}
            >
              企業比較調査を見る →
            </a>
            <a 
              href="/三菱重工①/デジタコ・ドラレコ競合調査(Gemini).html"
              className={styles.button}
            >
              Gemini版を見る →
            </a>
            <a 
              href="/三菱重工①/デジタコ・ドラレコ競合調査(GPT).html"
              className={styles.button}
            >
              GPT版を見る →
            </a>
            <a 
              href="/三菱重工①/各サービスの機能・飽和領域の整理.html"
              className={styles.button}
            >
              各サービスの機能・飽和領域の整理を見る →
            </a>
          </div>
        </section>

        {/* 三菱重工②セクション */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>三菱重工②</h2>
          <p className={styles.cardDescription}>
            トラックドライバーの実情レポート
          </p>
          <div className={styles.buttonGroup}>
            <a 
              href="/三菱重工②/トラックドライバーの実情.html"
              className={styles.button}
            >
              トラックドライバーの実情を見る →
            </a>
            <a 
              href="/三菱重工②/トラックドライバーの実情②.html"
              className={styles.button}
            >
              トラックドライバーの実情②を見る →
            </a>
          </div>
        </section>

        {/* 都産技研セクション */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>都産技研 IoT公募説明会</h2>
          <p className={styles.cardDescription}>
            クラウドと連携した5G・IoT・ロボット製品開発等支援事業の解説
          </p>
          <div className={styles.buttonGroup}>
            <a 
              href="/都産技研_IoT公募説明会/都産技研_IoT公募説明会.html"
              className={styles.button}
            >
              解説を見る →
            </a>
          </div>
        </section>

        {/* 観光DX推進事業セクション */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>観光DX推進事業</h2>
          <p className={styles.cardDescription}>
            補助金公募要領の分かりやすいまとめ
          </p>
          <div className={styles.buttonGroup}>
            <a 
              href="/観光DX推進事業/観光DX推進事業_補助金公募要領.html"
              className={styles.button}
            >
              公募要領を見る →
            </a>
          </div>
        </section>

        {/* グリーンインフラ支援セクション */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>グリーンインフラ支援</h2>
          <p className={styles.cardDescription}>
            グリーンインフラ支援制度事例集 2025年版
          </p>
          <div className={styles.buttonGroup}>
            <a 
              href="/グリーンインフラ支援/グリーンインフラ支援制度事例集.html"
              className={styles.button}
            >
              制度事例集を見る →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

