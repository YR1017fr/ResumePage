import './content.css';

const content = () =>{
    return (
        <div className='content-frame'>
            <strong>關於我</strong>
            <p>網路課程自學的前端求職者，使用React進行網站架設，有結合React、Express、PostgreSQL架設簡單網站的經驗</p>
            <strong className='content-title'>掌握技巧</strong>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Express(入門)</li>
            </ul>
            <strong className='content-title'>學歷</strong>
            <p>國立成功大學 土木工程學系（2017~2021）</p>
            <strong className='content-title'>作品</strong>
            <a href='https://j3ezpz.herokuapp.com/'>1.遊戲配裝器</a>
            <div className='content-project'>
                <p><span>簡介:</span>模擬MMORPG遊戲"劍俠情緣三"中不同門派穿不同裝備時的屬性面板</p>
                <p>使用React + Express + PostgreSQL架設，前端使用fetch向後端發出請求，後端使用Knex.js儲存/修改數據庫中的檔案</p>
            </div>
            <a href='https://face-recognition0920.herokuapp.com/'>2.人臉辨識</a>
            <div className='content-project'>
                <p><span>簡介:</span>使用Clarifai人臉辨識API，當提交的圖片中有人臉時幫使用者累計分數</p>
                <p>使用React + Express + PostgreSQL架設，前端使用fetch向後端發出請求，後端向Clarifai發送請求分析圖片，取得回應後再使用Knex.js儲存/修改數據庫中的檔案</p>
            </div>
            <a href='https://github.com/YR1017fr/RobotFriend'>3.機器朋友(GitHub)</a>
            <div className='content-project'>
                <p><span>簡介:</span>根據搜尋欄裡的訊息找尋名字符合的機器人卡片</p>
                <p>使用React架設，練習使用fetch接收並處理資料，有搜尋功能</p>
            </div>
        </div>
    )
}

export default content;