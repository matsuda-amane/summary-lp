// Next.jsのトップページ
// publicフォルダにあるHTMLファイルへのリンクを表示するページ

export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      lineHeight: '1.6'
    }}>
      <h1 style={{ 
        color: '#333',
        borderBottom: '3px solid #3498db',
        paddingBottom: '20px',
        marginBottom: '40px'
      }}>
        Summary LP
      </h1>
      
      <div style={{ 
        display: 'grid',
        gap: '20px'
      }}>
        <section style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>三菱重工</h2>
          <p>デジタコ・ドラレコ競合調査レポート</p>
          <a 
            href="/三菱重工/デジタコ・ドラレコ競合調査.html"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '10px 20px',
              background: '#3498db',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#2980b9'}
            onMouseOut={(e) => e.target.style.background = '#3498db'}
          >
            レポートを見る →
          </a>
        </section>

        <section style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginTop: 0 }}>都産技研 IoT公募説明会</h2>
          <p>クラウドと連携した5G・IoT・ロボット製品開発等支援事業の解説</p>
          <a 
            href="/都産技研_IoT公募説明会/都産技研_IoT公募説明会.html"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '10px 20px',
              background: '#3498db',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#2980b9'}
            onMouseOut={(e) => e.target.style.background = '#3498db'}
          >
            解説を見る →
          </a>
        </section>
      </div>
    </div>
  );
}

