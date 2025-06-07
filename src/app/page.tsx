import { ThemeToggle } from '@/components/ThemeToggle' // 引入 ThemeToggle
import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* 導覽列區塊 */}
            <section
                id="navbar"
                className="py-4 px-8 border-b border-gray-200 dark:border-gray-700"
            >
                <nav className="flex justify-between items-center max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold">Paper</h1>
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <a href="#hero" className="hover:text-blue-500">
                                首頁
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-500">
                                關於我
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-blue-500">
                                專案
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-500">
                                聯絡
                            </a>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </section>

            {/* 首頁區塊 (Hero Section) */}
            <section
                id="hero"
                className="min-h-screen flex items-center justify-center text-center p-8 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-950"
            >
                <div>
                    {/* 你可以在這裡放你的頭像，之後再替換 */}
                    <Image
                        src="/avatar.jpg" // 這裡之後會替換成你的頭像圖片路徑
                        alt="你的頭像"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-6 shadow-lg"
                    />
                    <h2 className="text-5xl font-extrabold mb-4">嗨，我是 Paper</h2>{' '}
                    {/* 修改為你的名字 */}
                    <p className="text-xl max-w-2xl mx-auto mb-8">
                        一名熱衷於打造優質使用者體驗的軟體開發者。
                    </p>
                    <a
                        href="#projects"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                    >
                        查看我的專案
                    </a>
                </div>
            </section>

            {/* 關於我區塊 (About Section) */}
            <section id="about" className="py-20 px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">關於我</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        我是一名來自台灣的高中生，專注於Javascript專案的開發，像是Discord機器人、網站等。
                        我熱衷於解決問題，並透過程式碼創造有價值的產品。我喜歡學習新技術，並不斷提升自己的技能。
                    </p>
                    <p className="text-lg leading-relaxed">
                        在我的業餘時間，我喜歡運動、看書、玩遊戲、聽音樂...
                        我相信持續學習和探索是成為一名優秀開發者的關鍵。
                    </p>
                    {/* 你可以在這裡添加更多關於你的技能列表或個人故事 */}
                </div>
            </section>

            {/* 專案區塊 (Projects Section) */}
            <section id="projects" className="py-20 px-8 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">我的專案</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* 專案卡片範例 1：增加圖片和技術標籤 */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <Image
                                src="/paper.png" // 替換為你的專案圖片路徑
                                alt="專案 1 預覽圖"
                                width={400}
                                height={225}
                                className="rounded-md mb-4 object-cover w-full h-auto"
                            />
                            <h3 className="text-2xl font-bold mb-3">Paper</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                                這個專案是一個 Discord 機器人。 它可以幫助你管理你的 Discord
                                伺服器、播放音樂、創建抽獎活動，以及更多功能。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">
                                    Discord.js
                                </span>
                                <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-200">
                                    MongoDB
                                </span>
                                <span className="bg-purple-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-200">
                                    Distube
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <a
                                    href="https://discord.com/oauth2/authorize?client_id=869166906765103135" // 替換為你的專案演示連結或網站連結
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center"
                                >
                                    邀請機器人{' '}
                                    <span className="ml-1 text-lg leading-none">&rarr;</span>
                                </a>
                                <a
                                    href="https://discord.com/oauth2/authorize?client_id=869166906765103135" // 替換為你的 GitHub 專案連結
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-semibold flex items-center"
                                >
                                    GitHub{' '}
                                    <span className="ml-1 text-lg leading-none">&#x2022;</span>{' '}
                                    {/* 可以換成GitHub圖標 */}
                                </a>
                            </div>
                        </div>

                        {/* 專案卡片範例 2：複製並修改，填入你的專案資訊 */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <Image
                                src="/project-placeholder.jpg" // 替換為你的專案圖片路徑
                                alt="專案 2 預覽圖"
                                width={400}
                                height={225}
                                className="rounded-md mb-4 object-cover w-full h-auto"
                            />
                            <h3 className="text-2xl font-bold mb-3">DoContrib</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                                這個專案是一個貢獻追蹤網頁。
                                它使用了Next.js、TailwindCSS、MUI、TypeScript，並使用Supabase資料庫、Vercel託管服務。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200">
                                    React
                                </span>
                                <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-200">
                                    Supabase
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center"
                                >
                                    查看演示{' '}
                                    <span className="ml-1 text-lg leading-none">&rarr;</span>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-semibold flex items-center"
                                >
                                    GitHub{' '}
                                    <span className="ml-1 text-lg leading-none">&#x2022;</span>
                                </a>
                            </div>
                        </div>

                        {/* 專案卡片範例 3：複製並修改，填入你的專案資訊 */}
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                            <Image
                                src="/project-placeholder.jpg" // 替換為你的專案圖片路徑
                                alt="專案 3 預覽圖"
                                width={400}
                                height={225}
                                className="rounded-md mb-4 object-cover w-full h-auto"
                            />
                            <h3 className="text-2xl font-bold mb-3">專案名稱 3</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                                這個專案是一個 [簡短描述]。 它使用了 [主要技術]。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-200">
                                    Vue.js
                                </span>
                                <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-200">
                                    Node.js
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center"
                                >
                                    查看演示{' '}
                                    <span className="ml-1 text-lg leading-none">&rarr;</span>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 font-semibold flex items-center"
                                >
                                    GitHub{' '}
                                    <span className="ml-1 text-lg leading-none">&#x2022;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 聯絡區塊 (Contact Section) */}
            <section id="contact" className="py-20 px-8 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-10">聯絡我</h2>
                    <p className="text-lg mb-8">
                        如果你有任何問題、合作機會，或是想聊聊技術，歡迎隨時聯絡我！
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="mailto:ericliu8888824@gmail.com" // 替換為你的電子郵件
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                        >
                            發送電子郵件
                        </a>
                        <a
                            href="https://www.linkedin.com/in/%E7%B4%99%E9%A1%9E-%E5%8A%89-099198330/" // 替換為你的 LinkedIn 帳號
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Paper1988" // 替換為你的 GitHub 帳號
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* 頁尾 (Footer) */}
            <footer className="py-8 px-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <p>&copy; {new Date().getFullYear()} Paper. 版權所有。</p> {/* 修改為你的名字 */}
            </footer>
        </main>
    )
}
